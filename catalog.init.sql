CREATE TABLE IF NOT EXISTS catalog (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    year INTEGER NOT NULL,
    type TEXT CHECK(type IN ('Movie', 'TVShow', 'Book')) NOT NULL
);

INSERT INTO catalog (id, title, description, year, type) VALUES
    ('550e8400-e29b-41d4-a716-446655440001', 'Test 1', 'This is a description 1', 2025, 'Movie'),
    ('550e8400-e29b-41d4-a716-446655440002', 'Test 2', 'This is a description 2', 2023, 'TVShow'),
    ('550e8400-e29b-41d4-a716-446655440003', 'Test 3', 'This is a description 3', 2024, 'Book'),
    ('550e8400-e29b-41d4-a716-446655440004', 'Test 4', 'This is a description 4', 2021, 'Movie'),
    ('550e8400-e29b-41d4-a716-446655440005', 'Test 5', 'This is a description 5', 2022, 'TVShow'),
    ('550e8400-e29b-41d4-a716-446655440006', 'Test 6', 'This is a description 6', 2020, 'Book'),
    ('550e8400-e29b-41d4-a716-446655440007', 'Test 7', 'This is a description 7', 2019, 'Movie'),
    ('550e8400-e29b-41d4-a716-446655440008', 'Test 8', 'This is a description 8', 2018, 'TVShow'),
    ('550e8400-e29b-41d4-a716-446655440009', 'Test 9', 'This is a description 9', 2017, 'Book'),
    ('550e8400-e29b-41d4-a716-446655440010', 'Test 10', 'This is a description 10', 2016, 'Movie');