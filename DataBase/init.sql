
CREATE TABLE IF NOT EXISTS users (
        ID_contact SERIAL,
        subject VARCHAR(255) NOT NULL
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        lmail VARCHAR(255) NOT NULL,
        phone_number CHAR(20) NOT NULL,
        message TEXT NOT NULL;
        date_create TIMESTAMP NOT NULL,
        UNIQUE (ID_USER),
        PRIMARY KEY (ID_USER)
    );
