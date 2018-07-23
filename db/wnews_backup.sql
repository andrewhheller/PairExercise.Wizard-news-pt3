--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.13
-- Dumped by pg_dump version 9.5.13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: posts; Type: TABLE; Schema: public; Owner: andrew
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    userid integer NOT NULL,
    title character varying(255) DEFAULT NULL::character varying,
    content text,
    date timestamp without time zone DEFAULT now()
);


ALTER TABLE public.posts OWNER TO andrew;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: andrew
--

CREATE SEQUENCE public.posts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO andrew;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: andrew
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: upvotes; Type: TABLE; Schema: public; Owner: andrew
--

CREATE TABLE public.upvotes (
    userid integer NOT NULL,
    postid integer NOT NULL,
    date timestamp without time zone DEFAULT now()
);


ALTER TABLE public.upvotes OWNER TO andrew;

--
-- Name: users; Type: TABLE; Schema: public; Owner: andrew
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text
);


ALTER TABLE public.users OWNER TO andrew;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: andrew
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO andrew;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: andrew
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: andrew
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: andrew
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: andrew
--

COPY public.posts (id, userid, title, content, date) FROM stdin;
1	1	Fianto Duri, the complete tutorial	Fianto Duri is a charm that was created to be combined with protective spells (Can be used with another person's shield spell)(When used on something else creates a explosion). As we already knows the (i.e.) Shield Charm needs the caster to stay focused on the spell in order to continue protecting him, so Fianto Duri allows the caster to keep a charm “alive” while he does some other work or casts some other spells.	2018-07-20 18:04:53.707333
2	2	Untransfiguration classes to become compulsory at Hogwarts	Learning untransfiguration is going to be mandatory at Hogwarts School of Witchcraft and Wizardry from 2017 onward. Untransfiguration will be covered in beginner-level spellbooks such as A Beginner's Guide to Transfiguration. Failure to at least attempt to untranfigure a wrongly-done transfiguration will be considered irresponsible.	2018-07-19 22:04:53.773815
3	3	Cracking the Aurologist Interview	Now in the 5th edition, Cracking the Aurologist Interview gives you the interview preparation you need to get the top aura study jobs. The book is over 500 pages and includes 150 aurologist interview questions and answers, as well as other advice.	2018-07-20 21:49:53.784776
4	4	ASK WN: What do you use to digitalize your scrolls?	Some scrolls need conservation treatment before they can be safely transported, handled, and digitized.  After these questions are answered, Preservation and Information Technology Specialists assess the project requirements and create the digitilized version.	2018-07-20 22:04:53.795991
5	5	The Pragmatic Dragon Feeder	In The Pragmatic Dragon Feeder, the author Baruffio tell us how to give food to dragons in a way that we can follow. How did they get so smart? Aren't they just as focused on details as other dragon feeders? The answer is that they paid attention to what they were doing while they were doing it.	2018-07-20 19:04:53.807086
6	6	The complete quidditch statistics	This is the Complete source for quidditch history including complete player, team, and league stats, awards, records, leaders, rookies and scores.	2018-07-20 21:04:53.818146
7	7	Ordinary Wizarding Levels study guide	The Ordinary Wizarding Level (O.W.L.) is, as you know, going to determine whether or not you will be allowed to continue taking that subject in subsequent school years, and whether they might be successful in obtaining a particular job. This guide help direct you to the most important information you need to know to ace the test	2018-07-20 21:04:53.829172
8	8	Is muggle-baiting ever acceptable?	Muggle-baiting can be a manifestation of anti-Muggle sentiments and is not acceptable according to the International Statute of Wizarding Secrecy - But, are there any circumstances under which it could be acceptable?	2018-07-20 21:54:53.840336
9	9	Conserving waterplants cheatsheet.	This Cheat Sheet is dedicated to providing wizards the information they want in an approachable, entertaining way.	2018-07-19 22:04:53.851477
10	10	Could wizards prevent WW3?	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae fermentum enim. Pellentesque sodales ut risus eu porta. Duis dictum rhoncus semper. Proin accumsan mollis ligula, eget elementum nibh dignissim quis. Proin augue risus, mollis non neque in, molestie rutrum purus. Morbi pretium nisl a commodo.	2018-07-20 21:14:53.862602
11	11	Show WN: Wand-Extinguishing Protection	This spell extinguishes the wand the caster is holding, a counter-charm to Lumos.	2018-07-20 21:04:53.873758
12	12	Do you still use Alarte Ascendare?	You've got levicorpus and Ascendio and wingardium leviosa, so is anyone still using Alarte Ascendare, too? (That is, unless you find wingardium leviosa too difficult to pronounce.)	2018-07-20 22:04:23.884889
13	13	Mailing lists WN readers ought to know about?	I love to subscribe to information feeds through mailing list subscription. What do you subscribe to that you think others would benefit by if they were to as well?	2018-07-20 22:03:53.895766
14	14	How to tell which spell used on a bug?	Question: Are ther any non-jinx incantations available to detect which spell used on a bug?	2018-07-20 22:04:53.973638
\.


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: andrew
--

SELECT pg_catalog.setval('public.posts_id_seq', 14, true);


--
-- Data for Name: upvotes; Type: TABLE DATA; Schema: public; Owner: andrew
--

COPY public.upvotes (userid, postid, date) FROM stdin;
1	1	2018-07-20 22:09:29.519351
1	2	2018-07-20 22:09:29.519351
1	3	2018-07-20 22:09:29.519351
1	4	2018-07-20 22:09:29.519351
1	5	2018-07-20 22:09:29.519351
1	6	2018-07-20 22:09:29.519351
1	7	2018-07-20 22:09:29.519351
1	8	2018-07-20 22:09:29.519351
1	9	2018-07-20 22:09:29.519351
1	10	2018-07-20 22:09:29.519351
1	11	2018-07-20 22:09:29.519351
1	12	2018-07-20 22:09:29.519351
1	13	2018-07-20 22:09:29.519351
1	14	2018-07-20 22:09:29.519351
2	1	2018-07-20 22:09:29.530017
2	2	2018-07-20 22:09:29.530017
2	3	2018-07-20 22:09:29.530017
2	4	2018-07-20 22:09:29.530017
2	5	2018-07-20 22:09:29.530017
2	6	2018-07-20 22:09:29.530017
2	7	2018-07-20 22:09:29.530017
2	8	2018-07-20 22:09:29.530017
2	9	2018-07-20 22:09:29.530017
2	10	2018-07-20 22:09:29.530017
2	11	2018-07-20 22:09:29.530017
2	12	2018-07-20 22:09:29.530017
2	13	2018-07-20 22:09:29.530017
3	1	2018-07-20 22:09:29.541109
3	2	2018-07-20 22:09:29.541109
3	3	2018-07-20 22:09:29.541109
3	4	2018-07-20 22:09:29.541109
3	5	2018-07-20 22:09:29.541109
3	6	2018-07-20 22:09:29.541109
3	7	2018-07-20 22:09:29.541109
3	8	2018-07-20 22:09:29.541109
3	9	2018-07-20 22:09:29.541109
3	10	2018-07-20 22:09:29.541109
3	11	2018-07-20 22:09:29.541109
4	1	2018-07-20 22:09:29.552205
4	2	2018-07-20 22:09:29.552205
4	3	2018-07-20 22:09:29.552205
4	4	2018-07-20 22:09:29.552205
4	5	2018-07-20 22:09:29.552205
4	6	2018-07-20 22:09:29.552205
4	7	2018-07-20 22:09:29.552205
4	8	2018-07-20 22:09:29.552205
4	9	2018-07-20 22:09:29.552205
5	1	2018-07-20 22:09:29.56328
5	2	2018-07-20 22:09:29.56328
5	3	2018-07-20 22:09:29.56328
5	5	2018-07-20 22:09:29.56328
5	5	2018-07-20 22:09:29.56328
5	6	2018-07-20 22:09:29.56328
6	1	2018-07-20 22:09:29.574465
6	2	2018-07-20 22:09:29.574465
7	3	2018-07-20 22:09:29.574465
8	5	2018-07-20 22:09:29.574465
9	1	2018-07-20 22:09:29.58544
10	2	2018-07-20 22:09:29.58544
11	3	2018-07-20 22:09:29.58544
12	1	2018-07-20 22:09:29.596529
13	2	2018-07-20 22:09:29.596529
14	1	2018-07-20 22:09:29.607638
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: andrew
--

COPY public.users (id, name) FROM stdin;
1	RubeusH
2	Baddock
3	Hetty
4	Alphard
5	Baruffio
6	Hbeery
7	Alatar
8	Falco
9	Otto
10	Cuthbert
11	Humphrey22
12	Bellatrix1
13	Dracod
14	Lupin
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: andrew
--

SELECT pg_catalog.setval('public.users_id_seq', 14, true);


--
-- Name: posts_pkey; Type: CONSTRAINT; Schema: public; Owner: andrew
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: andrew
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: posts_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: andrew
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- Name: upvotes_postid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: andrew
--

ALTER TABLE ONLY public.upvotes
    ADD CONSTRAINT upvotes_postid_fkey FOREIGN KEY (postid) REFERENCES public.posts(id);


--
-- Name: upvotes_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: andrew
--

ALTER TABLE ONLY public.upvotes
    ADD CONSTRAINT upvotes_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

