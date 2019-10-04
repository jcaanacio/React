import fetch from 'isomorphic-fetch';


export default function Login(data) {
	console.log(data);
	return fetch(' https://subscribe-carly.drivemycar.me/api/Login', {
        method: 'POST',
        mode: 'CORS',
		header: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		  },
        body: data
    }).then(res => {
        return res;
    }).catch(err => err);
}