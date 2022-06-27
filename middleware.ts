import { NextRequest, NextResponse } from 'next/server'
import AccountHandler from './utils/backend/panel/AccountHandler';
import {decode} from 'jsonwebtoken';


// Front end redirect from panel pages when not logged in 
export function middleware(req: NextRequest) {
    
    if (!req.nextUrl.pathname.startsWith("/panel")) {
        return NextResponse.next();
    } 

    if (!req.cookies.get("authorization")) {
        return NextResponse.redirect(req.nextUrl.origin + "/login");
    }

    return NextResponse.next();
    
}