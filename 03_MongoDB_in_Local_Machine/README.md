# MongoDB in Local Machine

![Logo](/03_MongoDB_in_Local_Machine/images/01_logo.png "Logo")

# Architecture

![MongoDB Architecture](/03_MongoDB_in_Local_Machine/images/00_mongodb_architecture.png "MongoDB Architecture")

Source: https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/08/MongoDB-Architecture.jpg

## Learning Outcomes
-	Installing MongoDB

# [Introduction to MongoDB](https://docs.mongodb.com/manual/introduction/)

## Document Database
A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents.

A MongoDB document.

The advantages of using documents are:

Documents (i.e. objects) correspond to native data types in many programming languages.
Embedded documents and arrays reduce need for expensive joins.
Dynamic schema supports fluent polymorphism.
Collections/Views/On-Demand Materialized Views
MongoDB stores documents in collections. Collections are analogous to tables in relational databases.

In addition to collections, MongoDB supports:

Read-only Views (Starting in MongoDB 3.4)
On-Demand Materialized Views (Starting in MongoDB 4.2).
## Key Features
### High Performance
MongoDB provides high performance data persistence. In particular,

- Support for embedded data models reduces I/O activity on database system.
- Indexes support faster queries and can include keys from embedded documents and arrays.
- Rich Query Language

MongoDB supports a rich query language to support read and write operations (CRUD) as well as:

### Data Aggregation
Text Search and Geospatial Queries.

### High Availability
MongoDB’s replication facility, called replica set, provides:

- automatic failover
- data redundancy.

A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and increasing data availability.

### Horizontal Scalability
MongoDB provides horizontal scalability as part of its core functionality:

- Sharding distributes data across a cluster of machines.
- Starting in 3.4, MongoDB supports creating zones of data based on the shard key. In a balanced cluster, MongoDB directs reads and writes covered by a zone only to those shards inside the zone. See the Zones manual page for more information.
Support for Multiple Storage Engines
MongoDB supports multiple storage engines:

- WiredTiger Storage Engine (including support for Encryption at Rest)
- In-Memory Storage Engine.

In addition, MongoDB provides pluggable storage engine API that allows third parties to develop storage engines for MongoDB.

# Steps

For Windows

1)	Visit the MongoDB Community Server website by clicking the following link:
https://www.mongodb.com/download-center/community


Find MongoDB (mongod.exe) and Mongo Shell (mongo.exe) from the installed directory.

Check mongo version to know whether the MongDB was correctly installed.


For MacOS

1)	After you downloaded the .tgz file from the website. Extract it and either follow a) or b):

This is what you see when you extract the .tgz file

a)	Copy those binaries into a directory listed in your PATH variable such as /usr/local/bin,
or
b)	Create or modify your user’s PATH environment variable to include this directory with this command.
>>> export PATH=<your-mongodb-install-directory>/bin:$PATH

2)	Create data directory if you start MongoDB for the first time.
>>> mkdir -p /data/db

3)	Make sure that the /data/db directory has the right permissions by running
>>> sudo chown -R `id -un` /data/db

4)	Run the Mongo daemon
>>> mongod

5)	If no error occurs and see this [initandlisten] waiting for connections on port 27017.

You can go ahead and follow steps below.

Start mongo shell on another terminal.
>>> mongo

Show all databases

> show dbs


Insert an article to the “articles” collection.
> db.articles.insert({title: “Hello World”})

Show all  collections.
> show collections

Show all database including a default collection “test”.
> show dbs

Use the “test” database.
> use test

> show collections

Find all articles.
> db.articles.find()

Exit the Mongo Shell.
> exit
