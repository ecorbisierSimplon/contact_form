
CREATE TABLE IF NOT EXISTS users (
        id_contact SERIAL,
        subject VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone_number CHAR(20) NOT NULL,
        message VARCHAR() NOT NULL,
        date_create TIMESTAMP NOT NULL,
        UNIQUE (id_contact),
        PRIMARY KEY (id_contact)
    );
