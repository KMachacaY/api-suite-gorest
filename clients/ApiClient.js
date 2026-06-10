class ApiClient {
  constructor(request) { this.request = request; }
  async createUser(data) { return this.request.post('/public/v2/users', { data }); }
  async getUser(id) { return this.request.get(`/public/v2/users/${id}`); }
  async deleteUser(id) { return this.request.delete(`/public/v2/users/${id}`); }
}
module.exports = ApiClient;