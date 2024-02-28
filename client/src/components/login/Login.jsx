import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	return (
		<>
			<form onSubmit={event => handleSubmit(event, navigate)}>
				<label>Escribe tu nombre de usuario</label>
				<input type='text' name='name' />
				<button>send</button>
			</form>
		</>
	);
};
const handleSubmit = (event, navigate) => {
	event.preventDefault();
	console.log(event.target.name.value);
	navigate('/chat');
};
export default Login;
