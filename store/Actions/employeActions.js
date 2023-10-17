import axios from "@/utils/axios";
import {
	addemploye,
	addinternships,
	addjobs,
	removeemploye,
	iserror,
	removeerror,
} from "../Reducers/employeReducer";

export const asynccurrentemploye = () => async (dispatch, getState) => {
	try {
		console.log("reached curr employe action");
		const { data } = await axios.post("/employe/current");
		dispatch(addemploye(data.employe));
		// console.log(data);
	} catch (error) {
		dispatch(iserror(error.response.data.message));
	}
};

export const asyncsignupemploye = (employe) => async (dispatch, getState) => {
	try {
		const { data } = await axios.post("/employe/signup", employe);
		// console.log(data);
		asynccurrentemploye();
	} catch (error) {
		dispatch(iserror(error));
	}
};

export const asyncsigninemploye =
	(bodyContent) => async (dispatch, getState) => {
		try {
			const { data } = await axios.post("/employe/signin", bodyContent);
			// console.log(data);
			dispatch(asynccurrentemploye());
		} catch (error) {
			dispatch(iserror(error.response.data.message));
		}
	};

export const asyncsignoutemploye =
	(bodyContent) => async (dispatch, getState) => {
		try {
			const { data } = await axios.get("/employe/signout");
			// console.log(data);
			dispatch(removeemploye());
		} catch (error) {
			dispatch(iserror(error.response.data.message));
		}
	};

export const asyncupdateemploye = (employe) => async (dispatch, getState) => {
	try {
		// console.log(getState.employe);
		const { _id } = getState().employeReducer.employe;
		const { data } = await axios.post("/employe/update/" + _id, employe);
		// console.log(data);
		dispatch(asynccurrentemploye());
	} catch (error) {
		console.log(error);
		dispatch(iserror(error));
	}
};

export const asyncavataremploye = (avatar) => async (dispatch, getState) => {
	try {
		// console.log(getState.employe);
		const { _id } = getState().employeReducer.employe;
		console.log(avatar);
		const { data } = await axios.post("/employe/avatar/" + _id, avatar);
		// console.log(data);
		dispatch(asynccurrentemploye());
	} catch (error) {
		// console.log(error);
		dispatch(iserror(error));
		// dispatch(iserror(error.response.data.message));
	}
};

export const asyncresetpasswordemploye =
	(password) => async (dispatch, getState) => {
		try {
			// console.log(getState.employe);
			const { _id } = getState().employeReducer.employe;
			const { data } = await axios.post(
				"/employe/reset-password/" + _id,
				password
			);
			// console.log(data);
			dispatch(asynccurrentemploye());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};

export const asyncforgetpasswordemploye =
	(email) => async (dispatch, getState) => {
		try {
			// console.log(getState.employe);
			const { data } = await axios.post("/employe/send-mail/", email);
			// console.log(data);
			dispatch(asynccurrentemploye());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};

export const asyncotppasswordemploye = (pwd) => async (dispatch, getState) => {
	try {
		// console.log(getState.employe);
		const { data } = await axios.post("/employe/forget-link/", pwd);
		// console.log(data);
		dispatch(asynccurrentemploye());
	} catch (error) {
		console.log(error);
		dispatch(iserror(error));
	}
};

// export const asyncalljobs = () => async (dispatch, getState) => {
// 	try {
// 		// console.log(getState.employe);
// 		const { data } = await axios.post("/employe/alljobs");
// 		// console.log(data);
// 		dispatch(addjobs(data.jobs));
// 	} catch (error) {
// 		console.log(error);
// 		dispatch(iserror(error));
// 	}
// };

// export const asyncallinternships = () => async (dispatch, getState) => {
// 	try {
// 		// console.log(getState.employe);
// 		const { data } = await axios.post("/employe/allinternships");
// 		// console.log(data);
// 		dispatch(addinternships(data.internships));
// 	} catch (error) {
// 		console.log(error);
// 		dispatch(iserror(error));
// 	}
// };

export const asynccreatejobemploye = (job) => async (dispatch, getState) => {
	try {
		// console.log(getState.employe);
		const { data } = await axios.post("/employe/job/create", job);
		// console.log(data);
		dispatch(asynccurrentemploye());
	} catch (error) {
		console.log(error);
		dispatch(iserror(error));
	}
};

export const asynccreateinternshipemploye =
	(internship) => async (dispatch, getState) => {
		try {
			// console.log(getState.employe);
			const { data } = await axios.post(
				"/employe/internship/create",
				internship
			);
			// console.log(data);
			dispatch(asynccurrentemploye());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};
