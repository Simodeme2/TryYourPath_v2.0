class Api {
    static URL = '/api/v1';

    static findAllPosts = async (queryParams=null) => {
        let url = `${this.URL}/posts`;
        if (queryParams !== null) {
            url += (url.indexOf('?') === -1 ? '?' : '&') + this.queryParams(queryParams);
        }   
        const response = await fetch(`${url}`);
        return await response.json();
    }

    static findOnePost = async (id) => {
        const response = await fetch(`${this.URL}/musea/${id}`);
        return await response.json();
    }

     static findAllMusea = async (queryParams=null) => {
        let url = `${this.URL}/musea`;
        if (queryParams !== null) {
            url += (url.indexOf('?') === -1 ? '?' : '&') + this.queryParams(queryParams);
        }   
        const response = await fetch(`${url}`);
        return await response.json();
    }

    static queryParams = (params) => {
        return Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
    }

    static museaLocations = async (queryParams=null) => {
        let url = `https://datatank.stad.gent/4/toerisme/musea.geojson?fbclid=IwAR1m0ckBeUUe5iGT6KDezRcoZiED9LKU-Yn4TsngbYLSNYzXKjmNVwViAFA`;
        if (queryParams !== null) {
            url += (url.indexOf('?') === -1 ? '?' : '&') + this.queryParams(queryParams);
        }   
        const response = await fetch(`${url}`);
        return await response.json();
    }
}

export default Api;
