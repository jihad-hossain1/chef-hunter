import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  return (
    <>
      <div className="bg-warning inline-block px-2 py-1 rounded shadow-md hover:font-semibold">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
      </div>
      <div ref={ref}>
        <h2 className="font-bold text-4xl underline text-gray-700 text-center py-16">
          Questions Answer
        </h2>
        <div className="grid md:grid-cols-2 gap-4 shadow border border-y-gray-400 p-4">
          <div className="border border-gray-300 rounded p-3">
            <h2 className="text-xl font-semibold text-center">
              1. Tell us the differences between uncontrolled and controlled
              components ?
            </h2>
            <h2 className="font-semibold">Controlled Component:</h2>
            <p>
              Controlled components in React are those in which form data is
              handled by the component’s state. Forms are used to store
              information in a document section. The information from this form
              is typically sent to a server to perform an action. This data is
              held by form input elements and control elements, such as input,
              select, textarea, etc., which maintain and control their states or
              values.
            </p>
            <h2 className="font-semibold">Uncontrolled Component:</h2>
            <p>
              it is similar to the traditional HTML form inputs. Here, the form
              data is handled by the DOM itself. It maintains their own state
              and will be updated when the input value changes. To write an
              uncontrolled component, there is no need to write an event handler
              for every state update, and you can use a ref to access the value
              of the form from the DOM.
            </p>
          </div>
          <div className="border border-gray-300 rounded p-3">
            <h2 className="text-xl font-semibold text-center">
              2. How to validate React props using PropTypes
            </h2>
            <h2 className="font-semibold">React PropTypes validators</h2>
            <p>
              PropTypes utility exports a wide range of validators for
              configuring type definitions. Below, we’ll list the available
              validators for basic, renderable, instance, multiple, collection,
              and required prop types.
            </p>
            <p className="font-semibold">Basic Protoype Validators:</p>
            PropTypes.any: The prop can be of any data type <br />{" "}
            PropTypes.bool: The prop should be a Boolean <br />{" "}
            PropTypes.number: The prop should be a number <br />
            PropTypes.string: The prop should be a string <br /> PropTypes.func:
            The prop should be a function <br /> PropTypes.array: The prop
            should be an array <br />
            PropTypes.object: The prop should be an object <br />{" "}
            PropTypes.symbol: The prop should be a symbol
          </div>
          <div className="border border-gray-300 rounded p-3">
            <h2 className="font-semibold text-xl text-center">
              3. Tell us the difference between nodejs and express js.
            </h2>
            <p>
              <span className="font-semibold">What is Node.js?</span> Node.js is
              a large open-source server-side, Javascript-based runtime
              environment. The single-threaded method utilised for web loading
              and async programming is credited with the framework's success as
              a high-performance, scalable framework. Furthermore, Node.js-based
              frameworks like Express, Socket.io, and Meteor.js can be used to
              improve a project's backend functionality. The technology is
              renowned for building single-page apps, websites, and backend API
              services using real-time and push-based architectures.
            </p>
            <p>
              <span className="font-semibold"> What is Express?</span>{" "}
              Express.js, sometimes known as Express, is a Node.js-based
              open-source server-side framework. It is part of the MEAN, MEVN,
              and MERN stacks and is written in Javascript. For speedier and
              more efficient web development, Express includes plugins, template
              code, middleware packages, and routing features. In addition, the
              framework allows third-party libraries and functionality to be
              included, making customisation easy.
            </p>
          </div>
          <div className="border border-gray-300 rounded p-3">
            <h2 className="font-semibold text-xl">
              4. What is a custom hook, and why will you create a custom hook?
            </h2>
            <p>
              Custom React JS hooks are reusable functions that a React JS
              software developer can use to add special and unique functionality
              to the React applications. Usually, if there is a requirement to
              add a feature, one can install a third-party library and solve the
              problem. But what if there is no such library with hooks that can
              be used? This problem is solved by using custom React JS hooks.
              <br />
              <span className="font-semibold">create a custom hook</span> <br />
              -- A custom hook is a special JavaScript function whose name
              starts with ‘use’ and can be used to call other hooks. Let’s take
              a look at some major differences between a custom React JS hook
              and React JS components: <br />
              -- A custom hook does not require a specific signature. <br />
              -- A software developer can choose what argument the custom hook
              has and what should the argument return. <br />
              -- A custom hook always starts with the name ‘use’.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
