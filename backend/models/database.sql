-- CREATE TABLE roles (
--     id BIGINT PRIMARY KEY AUTO_INCREMENT,
--     role VARCHAR(20) NOT NULL
-- );

-- CREATE TABLE users (
--     id BIGINT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     role_id BIGINT,
--     FOREIGN KEY (role_id) REFERENCES roles(id),
--     is_deleted SMALLINT DEFAULT 0
-- );

-- CREATE TABLE permissions(
--     id BIGINT PRIMARY KEY AUTO_INCREMENT,
--     permission VARCHAR(255) UNIQUE NOT NULL
-- );