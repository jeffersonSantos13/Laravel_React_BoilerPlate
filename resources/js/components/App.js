import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import api from '../../services/api';

function App() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async() => {
      getAllPosts();
    })()
  }, []);

  async function getAllPosts() {
    await api.get('/api').then(response => {
      setPosts(response.data);
      setTitle('');
      setBody('');
      setId(0);
    });
  }

  function handleGetOnePost(post) {
    setId(post.id);
    setTitle(post.title);
    setBody(post.body);
  }

  async function handleDelete(id) {
    await api.delete(`/api/${id}`).then(response => {
      getAllPosts();
    });
  }

  async function handleSubmit(event, id) {
    event.preventDefault();

    if (id == 0) {
      await api.post('/api', {
        title,
        body,
      }).then(res => getAllPosts());
    } else {
      await api.put(`/api/${id}`, {
        title,
        body,
      }).then(res => getAllPosts());
    }
  }

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={e => handleSubmit(e, id)}>
          <div className="input-field col s4">
            <i className="material-icons prefix">input</i>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="title"
            />
          </div>

          <div className="input-field col s4">
            <i className="material-icons prefix">content_paste</i>
            <input
              type="text"
              value={body}
              onChange={e => setBody(e.target.value)}
              placeholder="Body"
            />
          </div>

          <div className="col s4">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Save
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>

        <table>
          <tbody>
            <tr>
              <td>Title</td>
              <td>Body</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    className="waves-effect waves-light btn"
                    onClick={e => handleGetOnePost(post)}
                  >
                    <i className="material-icons prefix">create</i>
                  </button>
                </td>
                <td>
                  <button
                    className="waves-effect waves-light btn"
                    onClick={e => handleDelete(post.id)}
                  >
                    <i className="material-icons prefix">delete</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
