// Javascript Object Notation JSON
// In JS we work alot with API's
// JSON is the industry standard.

const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body of the post.',
};

// Convert to JSON string.
const str = JSON.stringify(post);
//console.log(str.id); //Will result in undefined must parse it first.

// Parse JSON
const obj = JSON.parse(str);

console.log(obj.id);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body of the post one.',
  },
  {
    id: 2,
    title: 'Post two',
    body: 'This is the body of the post two.',
  },
  {
    id: 3,
    title: 'Post three',
    body: 'This is the body of the post three.',
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);
