
CREATE TABLE IF NOT EXISTS users (
        ID_USER SERIAL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        pseudo VARCHAR(255) NOT NULL,
        key_password VARCHAR(1024) NOT NULL,
        is_admin BOOLEAN NOT NULL,
        date_create TIMESTAMP NOT NULL,
        UNIQUE (ID_USER),
        PRIMARY KEY (ID_USER)
    );
