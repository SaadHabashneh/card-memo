CREATE TABLE roles (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE permissions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    permission VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE role_permission (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    role_id BIGINT,
    permission_id BIGINT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (permission_id) REFERENCES permissions(id)
);

CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id BIGINT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    is_deleted SMALLINT DEFAULT 0
);

CREATE TABLE scores (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    score BIGINT NOT NULL,
    user_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
