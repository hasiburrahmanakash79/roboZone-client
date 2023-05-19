import useTitle from "../Hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      <div className="border rounded p-5 ">
        <h1 className="text-2xl font-semibold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p className="font-semibold">Answer:</p>
        <p>
          1. Access Token: An access token is a credential that is issued to a
          user or an application after a successful authentication process. It
          represents the users identity and permissions and is typically used to
          authorize access to specific resources or perform actions on behalf of
          the user.
        </p>
        <p>
          2. Refresh Token: A refresh token is a long-lived credential that is
          also issued during the authentication process. Its purpose is to
          obtain a new access token when the current access token expires or
          becomes invalid. Unlike access tokens, refresh tokens are typically
          kept securely on the server-side and are not meant to be exposed to
          clients or included in API requests.
        </p>
        <p>
          <span className="underline">
            Access tokens and refresh tokens work together to enable secure
            authentication and authorization. Heres a breakdown of how they
            typically work:
          </span> <br />
          (a) Authentication: When a user or an application authenticates with a
          server, typically through a login process, the server verifies the
          provided credentials and, if valid, generates an access token and a
          refresh token. <br />
          (b) Access Token Usage: The client-side application includes the
          access token in API requests as a means of authentication. The server
          receives the request and validates the access token to ensure the user
          is authorized to access the requested resource. If the access token is
          valid and not expired, the server processes the request. <br />
          (c) Refresh Token Usage: To obtain a new access token, the client
          sends a request to the server with the refresh token. The server
          verifies the refresh token validity and checks if it has expired or if
          it is associated with the client making the request. If the refresh
          token is valid, the server generates a new access token and returns it
          to the client.
        </p>
      </div>
      <div className="border rounded p-5 ">
        <h1 className="text-2xl font-semibold">
        Compare SQL and NoSQL databases?
        </h1>
        <p className="font-semibold">Answer:</p>
        <p className="font-semibold">SQL Databases:</p>
        <p>
          1. Structure: SQL databases are based on a structured, tabular data model, where data is organized into tables with predefined schemas. Each table consists of rows and columns, and relationships between tables are established using foreign keys.
        </p>
        <p>
          2. Schema and Data Consistency: SQL databases enforce a rigid schema, meaning the structure of the data must be defined in advance and adhered to. This ensures data consistency and integrity. All rows in a table must adhere to the defined schema.
        </p>
        <p>
          3. Query Language: SQL databases use SQL as their primary query language. SQL provides a standardized way to interact with the database, allowing for complex querying, data manipulation, and joining of tables.
        </p>
        <p className="font-semibold">NoSQL Databases:</p>
        <p>
          1. Flexibility: NoSQL databases offer a flexible, schema-less data model, allowing for dynamic and unstructured data. They can handle a variety of data types and structures without requiring a predefined schema.
        </p>
        <p>
          2. Scalability: NoSQL databases excel at horizontal scalability, as they are designed to distribute data across multiple servers. They can handle large volumes of data and high traffic loads by scaling out, adding more servers to the cluster.
        </p>
        <p>
          3. Performance: NoSQL databases are optimized for high-performance, especially when dealing with large datasets and high-velocity data. They can provide faster read and write operations by sacrificing some of the consistency guarantees offered by SQL databases.
        </p>
      </div>

      <div className="border rounded p-5 ">
        <h1 className="text-2xl font-semibold">
        What is express js? What is Nest JS?
        </h1>
        <p className="font-semibold">Answer:</p>
        <p className="font-semibold">Express.js is a popular web application framework for Node.js, a JavaScript runtime environment. It provides a robust set of features and tools to build web applications and APIs</p>
        <p>
          1. Web Application Framework: Express.js serves as a web application framework that simplifies the process of building server-side applications.
        </p>
        <p>
          2. Routing: Express.js offers a routing system that enables developers to define routes for different URLs and HTTP methods. This allows for the mapping of URLs to specific functionalities or handlers within the application.
        </p>
        <p>
          3. Middleware: Middleware functions in Express.js are functions that have access to the request and response objects and can modify them or perform additional tasks before passing them to the next middleware function. 
        </p>
        <p className="font-semibold">NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications.</p>
        <p>
          1. TypeScript-Based: NestJS is built with TypeScript, a superset of JavaScript that adds optional static typing and other features to enhance the development experience and maintainability of code.
        </p>
        <p>
          2. Dependency Injection: NestJS employs dependency injection, a design pattern that enables the efficient management and injection of dependencies into various components of the application.
        </p>
        <p>
          3. Express Integration: NestJS builds on top of Express.js, a popular web application framework for Node.js. It leverages the power and flexibility of Express, while adding additional abstractions and features to enhance productivity and maintainability.
        </p>
      </div>
      <div className="border rounded p-5 ">
        <h1 className="text-2xl font-semibold">
        What is MongoDB aggregate and how does it work?
        </h1>
        <p className="font-semibold">Answer:</p>
        <p className="font-semibold">MongoDB, the aggregate framework is a powerful feature that allows you to perform advanced data processing and analysis operations on collections of documents. It provides a way to perform computations, transformations, and aggregations on the data stored in MongoDB.</p>
        <p>
          1. $match: This stage filters the documents based on specified criteria, similar to the find operation. It uses query expressions to match documents that meet certain conditions.
        </p>
        <p>
          2. $project: This stage is used to reshape or transform the documents in the pipeline. It allows you to include or exclude specific fields, create computed fields, rename fields, and perform other transformations.
        </p>
        <p>
          3. $sort: This stage sorts the documents based on specified fields in ascending or descending order. 
        </p>
        <p>
          4. $limit and $skip: These stages allow you to limit the number of documents returned by the pipeline or skip a certain number of documents. 
        </p>
        <p className="font-semibold">The MongoDB aggregate framework works by processing documents in a collection through a series of stages defined in an aggregation pipeline.</p>
        <p>
          1. Define the Pipeline: You start by defining an array of stages that make up the aggregation pipeline. Each stage represents a specific operation or transformation to be performed on the documents.
        </p>
        <p>
          2. Input Documents: The aggregation pipeline takes the documents from a specified collection as input. These documents are then processed through each stage in the pipeline
        </p>
        <p>
          3. Output Documents: As the documents move through the pipeline, they are progressively modified or filtered based on the operations in each stage. At the end of the pipeline, the resulting documents are returned as the output of the aggregation operation.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
