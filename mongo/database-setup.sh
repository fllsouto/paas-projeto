#!/bin/bash
set -e

mongo <<EOF
  use $MONGO_INITDB_DATABASE
  db.createUser({
    user: 'admin',
    pwd: 'strongpassword123',
    roles: [{
      role: 'readWrite',
      db: 'notifications'
    }]
  })
EOF
