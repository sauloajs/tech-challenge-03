CREATE TABLE health_general_data (
    id INT IDENTITY(1,1) PRIMARY KEY,
    informative  VARCHAR(240) NOT NULL,
    territorial_level VARCHAR(255) NOT NULL,
    territorial_coverage VARCHAR(255) NOT NULL,
    opening_indicator_1 VARCHAR(255) NOT NULL,
    opening_category_1 VARCHAR(255) NOT NULL,
    opening_indicator_2 VARCHAR(255) NOT NULL,
    opening_category_2 VARCHAR(255) NOT NULL,
    four_months_ago FLOAT NOT NULL,
    three_months_ago FLOAT NOT NULL,
    two_months_ago FLOAT NOT NULL,
    a_month_ago FLOAT NOT NULL,
    current_month FLOAT NOT NULL,
    extraction_date DATE
);
