class ApiClient {
  constructor(request) { this.request = request; }
  get users() {
    return {
      create: async (data) => {
        const response = await this.request.post('/public/v2/users', { data });
        return {
          status: response.status(),
          body: await response.json()
        };
      },
      get: async (id) => {
        const response = await this.request.get(`/public/v2/users/${id}`);
        return response.status();
      },
      delete: async (id) => {
        const response = await this.request.delete(`/public/v2/users/${id}`);
        return response.status();
      }
    };
  }
}
module.exports = ApiClient;