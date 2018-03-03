class Api {
  static getHeaders = function(){
    const token = '';
    return {
      'Content-Type': 'application/json',
      'Autorization': token,
    }
  }

  static get = async function(route) {
    return await this.xhr(route, null, 'GET');
  }

  static post = async function(route, params) {
    return await this.xhr(route, params, 'POST');
  }

  static delete = async function(route) {
    return await this.xhr(route, null, 'DELETE');
  }

  // todas las llamadas pasan por aqui
  static xhr = async function(route, params, method) {
    const host = 'https://tranquil-garden-30231.herokuapp.com';
    const url = `${host}/${route}`;

    const headers = this.getHeaders();
    const options = {
      method: method,
      headers: headers,
      body: params ? JSON.stringify(params) : null
    }

    return fetch(url, options);
  }
}

export default Api;