CREATE TABLE emails (
    id                  serial,
    firstName            varchar(20),
    lastName            varchar(20),
    companyName         varchar(50),
    emailAddress        varChar(50),
    serviceRequested    services_enum,
    additionalComments  varchar(255),
    date                timestamp,
    primary key (id)
);

CREATE TYPE services_enum as enum (
    'Nightly Janitorial',
    'Floor Stripping and Waxing',
    'Shipping and Receiving Cleaning',
    'Disinfecting and Sanitization'
);