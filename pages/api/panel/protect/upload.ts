import nextConnect from 'next-connect';
import multer from 'multer';
import cookie from 'cookie';
import Account from '../../../../utils/backend/panel/Account';
import AccountHandler from '../../../../utils/backend/panel/AccountHandler';
import fs from 'fs';

const apiRoute = nextConnect({
    onError(error, req, res:any) {
        res.status(200).json({ success: false, response: error.message });
    },
    onNoMatch(req, res) {
        res.status(200).json({ success: false, response: `Method '${req.method}' Not Allowed` });
    },
});

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            if (!req.headers.cookie) {
                return cb(new Error('Not authorized'), "./user-uploads/unknown/");
            }
            
            const cookies = cookie.parse(req.headers.cookie!);
            const acc:Account = new AccountHandler().getUser(cookies.authorization!)!;

            if (!acc) {
                return cb(new Error('Not authorized'), "./user-uploads/unknown/");
            }

            const path = './user-uploads/' + acc._id;
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path, { recursive: true });
            }

            cb(null, './user-uploads/' + acc._id);
        },
        filename: (req, file, cb) => cb(null, file.originalname)
    }),
});

apiRoute.use(upload.array('files'));

apiRoute.post((req, res) => {
    res.status(200).json({ success: true });

    
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};