import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./index.css";
import Logo from "./logo-og.png";

// const Tweet = ({ tweet }) => {
//   return (
//     <div className="tweet">
//       <Avatar hash={tweet.gravatar} />
//       <div className="content">
//         <NameWithHandle author={tweet.author} />
//         <Time time={tweet.timestamp} />
//         <Message text={tweet.message} />
//         <div className="buttons">
//           <ReplyButton />
//           <RetweetButton count={tweet.retweets} />
//           <LikeButton count={tweet.likes} />
//           <MoreOptionsButton />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Avatar = ({ hash }) => {
//   var url = `https://www.gravatar.com/avatar/${hash}`;
//   return <img src={url} className="avatar" alt="avatar" />;
// };

// const Message = ({ text }) => {
//   return <div className="message">{text}</div>;
// };

// const NameWithHandle = ({ author }) => {
//   const { name, handle } = author;
//   return (
//     <span className="name-with-handle">
//       <span className="name">{name}</span>
//       <span className="handle">@{handle}</span>
//     </span>
//   );
// };

// const Time = ({ time }) => {
//   const timeString = moment(time).fromNow();
//   return <span className="time">{timeString}</span>;
// };

// const ReplyButton = () => {
//   return <i className="fa fa-reply reply-button" />;
// };

// const getRetweetCount = count => {
//   if (count > 0) {
//     return <span className="retweet-count">{count}</span>;
//   } else {
//     return null;
//   }
// };

// const RetweetButton = ({ count }) => {
//   return (
//     <span className="retweet-button">
//       <i className="fa fa-retweet" />
//       {getRetweetCount(count)}
//     </span>
//   );
// };

// const LikeButton = ({ count }) => {
//   return (
//     <span className="like-button">
//       <i className="fa fa-heart">
//         {count > 0 && <span className="like-count">{count}</span>}
//       </i>
//     </span>
//   );
// };

// const MoreOptionsButton = () => {
//   return <i className="fa fa-ellipsis-h more-options-button" />;
// };

// const testTweet = {
//   message: "Something about cats.",
//   gravatar: "xyz",
//   author: {
//     handle: "catperson",
//     name: "Iama Catperson"
//   },
//   likes: 5,
//   retweets: 2,
//   timestamp: "2016-07-30 21:24:37"
// };

// ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));

// const Poster = ({ info }) => {
//   const { image, title, text } = info;
//   return (
//     <div>
//       <img src={image} alt="photo here" />
//       <h1>{title}</h1>
//       <p>{text}</p>
//     </div>
//   );
// };

// const example = {
//   image: Logo,
//   title: "React",
//   text: "The Best Thing Since Jquery, probable."
// };

// ReactDOM.render(<Poster info={example} />, document.querySelector("#root"));

// const LineEmail = ({ email }) => {
//   const { sender, subject, date, message } = email;
//   return (
//     <div>
//       <h2>{sender}</h2>
//       <h3>{subject}</h3>
//       <h4>{date}</h4>
//       <h5>{message}</h5>
//     </div>
//   );
// };

// const exampleEmail = {
//   sender: "Dave Ceddia",
//   subject: "Learn React Now!",
//   date: "October 11, 2018",
//   message:
//     "Learn React by creating small projects and drilling it into your skull"
// };

// ReactDOM.render(
//   <LineEmail email={exampleEmail} />,
//   document.querySelector("#root")
// );

// CHILDREN EXERCISE 1

// const ErrorBox = ({ children }) => {
//   return (
//     <div className="alert-danger" id="warning">
//       <i class="fas fa-exclamation-triangle fa-2x" />
//       {children}
//     </div>
//   );
// };

// const Container = () => {
//   return <ErrorBox>Something has gone wrong.</ErrorBox>;
// };

// ReactDOM.render(<Container />, document.querySelector("#root"));

// CHILDREN EXERCISE 2.A

// const FirstChildOnly = ({ children }) => {
//   let items = React.Children.toArray(children);
//   let firstItem = items.slice(0, 1);
//   return <div>{firstItem}</div>;
// };

// const Container = () => {
//   return (
//     <FirstChildOnly>
//       <h1>The newer first child!</h1>
//       <p>The first child</p>
//       <p>The second child should not render</p>
//     </FirstChildOnly>
//   );
// };

// ReactDOM.render(<Container />, document.querySelector("#root"));

// CHILDREN EXERCISE 2.B

// const LastChildOnly = ({ children }) => {
//   let items = React.Children.toArray(children);
//   let lastItem = items.slice(items.length - 1, items.length);
//   return <div>{lastItem}</div>;
// };

// const Container = () => {
//   return (
//     <LastChildOnly>
//       <p>1</p>
//       <p>2</p>
//       <p>3</p>
//       <p>4</p>
//       <p>5</p>
//       <p>6</p>
//     </LastChildOnly>
//   );
// };

// ReactDOM.render(<Container />, document.querySelector("#root"));

// CHILDREN EXERCISE 2.C

// const Head = ({ number, children }) => {
//   let items = React.Children.toArray(children);
//   let someItems = items.slice(0, number);
//   return <div>{someItems}</div>;
// };

// const Container = () => {
//   return (
//     <Head number={6}>
//       <p>1</p>
//       <p>2</p>
//       <p>3</p>
//       <p>4</p>
//       <p>5</p>
//       <p>6</p>
//       <p>7</p>
//       <p>8</p>
//       <p>9</p>
//     </Head>
//   );
// };

// ReactDOM.render(<Container />, document.querySelector("#root"));


// CHILDREN EXERCISE 2.D

// const Tail = ({ children, number }) => {
//   let items = React.Children.toArray(children);
//   let lastItems = items.slice(items.length - number, items.length);
//   return <div>{lastItems}</div>;
// };

// const Wrapper = () => {
//   return (
//     <Tail number={5}>
//       <p>1</p>
//       <p>2</p>
//       <p>3</p>
//       <p>4</p>
//       <p>5</p>
//       <p>6</p>
//       <p>7</p>
//       <p>8</p>
//       <p>9</p>
//     </Tail>
//   );
// };

// ReactDOM.render(<Wrapper />, document.querySelector("#root"));

CHILDREN EXERCISE 3

function Dialog({ children }) {
  let header, body, footer;
  header = body = footer = null;

  React.Children.forEach(children, child => {
    switch (child.type) {
      case Header:
        header = child;
        break;
      case Footer:
        footer = child;
        break;
      case Body:
        body = child;
        break;
      default:
        throw new Error(
          "Dialog can only contain Header, Body, and Footer components."
        );
    }
  });

  return (
    <div className="modal show inline-dialog">
      <div className="modal-header">{header}</div>
      <div className="modal-body">{body}</div>
      <div className="modal-footer">{footer}</div>
    </div>
  );
}

function Header({ children }) {
  return <h4>{children}</h4>;
}
function Body({ children }) {
  return <div>{children}</div>;
}
function Footer({ children }) {
  return <div>{children}</div>;
}

function Test() {
  return (
    <Dialog>
      <Header>This Is Important</Header>
      <Body>Here is some important text or error or something.</Body>
      <Footer>
        <button className="btn btn-default">Close</button>
      </Footer>
    </Dialog>
  );
}

ReactDOM.render(<Test />, document.querySelector("#root"));
