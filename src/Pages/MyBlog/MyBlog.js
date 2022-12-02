const MyBlog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Blgo
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-400">
           
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
               Defferent Between SQL,noSQL?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What is jwt, how does Work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. 
              For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What is different Javascript and Node Js?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries
             that can be conveniently accessed from JavaScript programming to be more helpful.
             JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. 
             Node.js, on the other hand, is a V8-based server-side programming language.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Hoe does Node js handle multiple request at the same time?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. 
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyBlog;
