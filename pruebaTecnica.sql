create table IF NOT EXISTS genres(name TEXT PRIMARY KEY);

INSERT INTO GENRES(name) values ('Drama'),('Action'),('Crime')

create table IF NOT EXISTS images(id serial PRIMARY KEY,name TEXT, type TEXT,
					data bytea);

create table IF NOT EXISTS movies(id serial PRIMARY KEY,title TEXT, description TEXT,
					genre TEXT);

INSERT INTO movies(title,description,genre) values
('The Shawshank Redemption','Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency',
'Drama'
),
('Inception','Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency',
'Action'
),
('The Dark Knight','When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham',
'Action'
),
('Pulp Fiction','The lives of two mob hitmen, a boxer, a ganster''s wife, and a pair of diner bandits interwine in four tales of violence and redemption.',
'Crime'
),
('The Goodfather', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
'Crime'),
('Fight Club','An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
'Drama')


select * from genres;
select * from movies
select * from images;