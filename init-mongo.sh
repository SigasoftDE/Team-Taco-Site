echo Running mongo script
mongosh <<EOF
    use admin
    db.createUser(
      {
        user: "taco-blog-root",
        pwd: "sample-Password",
        roles: [ { role: "root", db: "admin" } ]
      }
    )

    use taco-blog;
    db.createUser(
      {
        user: "applicationUser",
        pwd: "sample-Password",
        roles: [ { role: "readWrite", db: "taco-blog" } ]
      }
    )
EOF

echo Mongo script finished