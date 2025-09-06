
const Register = () => {
  return (
    <section>
      <Link to="/">
        <p>Go back hone</p>
      </Link>

      <div className="login">
        <h1>Register</h1>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input type="text" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input type="text" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="role"></label>
          <select name="role" id="role">
            <option value="admin">Admin</option>
            <option value="user">user</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default Register
