create table `user`(
  user_id integer primary key not null,
  pseudo varchar(60) not null,
  name varchar(60) not null unique,
  email varchar(60) not null unique,
  password varchar(255) not null
);

create table `stuff` (
    stuff_id integer primary key not null,
    name varchar(50) not null,
    description varchar(300) not null,
    hat_id varchar(60) null,
    cape_id varchar(60) null,
    chest_id varchar(60) null,
    pant_id varchar(60) null,
    belt_id varchar(60) null,
    boot_id varchar(60) null,
    charm_id varchar(60) null,
    ring1_id varchar(60) null,
    ring2_id varchar(60) null,
    shield_id varchar(60) null,
    weapon_id varchar(60) null,
    trophy1_id varchar(60) null,
    trophy2_id varchar(60) null,
    trophy3_id varchar(60) null,
    trophy4_id varchar(60) null,
    trophy5_id varchar(60) null,
    trophy6_id varchar(60) null,
    familier_id varchar(60) null,
    mount_id varchar(60) null,
    user_id integer references user(user_id),
    image_url varchar(255) not null
);

create table `comment` (
    comment_id integer primary key not null,
    content varchar(300) not null,
    created_at datetime not null,
    updated_at datetime null,
    user_id integer references user(user_id) not null,
    answer_id integer references comment(comment_id) null,
    item_id integer null,
    stuff_id integer references stuff(stuff_id) null
);