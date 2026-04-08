Definition:

GraphQL is a query language for APIs and a runtime for executing those queries using a defined type system.

It allows clients to request exactly the data they need from a server through a single endpoint.


Background:

GraphQL was developed by Facebook in 2012 and publicly released in 2015. It was designed to overcome limitations of REST APIs, especially in complex applications.

Key Idea:

Unlike REST, where the server defines fixed responses, GraphQL allows the client to define the structure of the response.   

Core Principles:

1. Client-Driven Data Fetching

The client specifies what data it needs, and the server returns only that data. 

2. Strongly Typed Schema:

GraphQL APIs are based on a schema that defines types, fields, and relationships.

This ensures:

Predictability
Validation
Clear API structure


3. Single Endpoint

GraphQL APIs use a single HTTP endpoint (usually /graphql) for all operations.


Main Components
1. Schema

The schema is the blueprint of the API. It defines:

Data types
Queries
Mutations
Relationships


2. Types

GraphQL uses a type system to define data structures.

Types can be:

Scalar types: Int, Float, String, Boolean, ID
Object types: Custom structured data
List types: Arrays of data
Non-null types: Required fields


3.  Query

Queries are used to retrieve data from the server.

They are similar to GET requests in REST but allow precise data selection.

4. Mutation

Mutations are used to modify data (create, update, delete).

They are similar to POST, PUT, DELETE in REST.


5. Subscription

Subscriptions enable real-time data updates.

They use persistent connections (usually WebSockets).


6. Resolver

Resolvers are functions that define how each field in the schema is fetched or computed.

They act as the bridge between:

Query request
Data source (database, API, etc.)

7. Arguments

GraphQL allows passing arguments to queries and mutations for filtering and dynamic data fetching.

8. Fragments

Fragments allow reusability of query parts, helping reduce duplication.


9. Variables

Variables are used to parameterize queries, making them dynamic and reusable.


Execution Flow
Client sends a query to the GraphQL server
Server validates the query against the schema
Resolvers fetch required data
Data is combined and returned as a response


Features
Declarative data fetching
Hierarchical queries
Strong typing
Introspection (API can describe itself)
Version-less API

Advantages
Efficient Data Fetching
Eliminates over-fetching and under-fetching
Single Endpoint
Simplifies API structure
Better Developer Experience
Clear schema and documentation
Flexibility
Clients control response shape
Real-Time Support
Built-in subscription model


Disadvantages
Complexity
More complex than REST for beginners
Performance Risks
Deep/nested queries can be expensive
Caching Difficulty
Harder compared to REST
Overhead
Requires schema and resolver setup


Use Cases

GraphQL is suitable for:

Complex applications with multiple data sources
Mobile apps (optimized data usage)
Real-time systems
Large-scale frontend applications


When Not to Use

GraphQL may not be ideal for:

Simple CRUD applications
Small projects with limited data complexity
Systems requiring heavy caching

