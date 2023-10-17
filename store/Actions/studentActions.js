import axios from "@/utils/axios";
import {
	addstudent,
	addinternships,
	addjobs,
	removestudent,
	iserror,
	removeerror,
} from "../Reducers/studentReducer";
import { toast } from "react-toastify";

export const asynccurrentstudent = () => async (dispatch, getState) => {
	try {
		console.log("reached curr student action");
		const { data } = await axios.post("/student");
		dispatch(addstudent(data.student));
		// console.log(data);
	} catch (error) {
		dispatch(iserror(error.response.data.message));
	}
};

export const asyncsignupstudent = (student) => async (dispatch, getState) => {
	try {
		const { data } = await axios.post("/student/signup", student);
		// console.log(data);
		asynccurrentstudent();
	} catch (error) {
		dispatch(iserror(error.response.data.message));
	}
};

export const asyncsigninstudent =
	(bodyContent) => async (dispatch, getState) => {
		try {
			const { data } = await axios.post("/student/signin", bodyContent);
			// console.log(data);
			dispatch(asynccurrentstudent());
		} catch (error) {
			dispatch(iserror(error.response.data.message));
		}
	};

export const asyncsignoutstudent =
	(bodyContent) => async (dispatch, getState) => {
		try {
			const { data } = await axios.get("/student/signout");
			// console.log(data);
			dispatch(removestudent());
		} catch (error) {
			dispatch(iserror(error.response.data.message));
		}
	};

export const asyncupdatestudent = (student) => async (dispatch, getState) => {
	try {
		// console.log(getState.student);
		const { _id } = getState().studentReducer.student;
		const { data } = await axios.post("/student/update/" + _id, student);
		// console.log(data);
		dispatch(asynccurrentstudent());
	} catch (error) {
		console.log(error);
		dispatch(iserror(error));
	}
};

export const asyncavatarstudent = (avatar) => async (dispatch, getState) => {
	try {
		// console.log(getState.student);
		const { _id } = getState().studentReducer.student;
		console.log(avatar);
		const { data } = await axios.post("/student/avatar/" + _id, avatar);
		// console.log(data);
		dispatch(asynccurrentstudent());
	} catch (error) {
		// console.log(error);
		// dispatch(iserror(error));
		dispatch(iserror(error.response.data.message));
	}
};

export const asyncresetpasswordstudent =
	(password) => async (dispatch, getState) => {
		try {
			// console.log(getState.student);
			const { _id } = getState().studentReducer.student;
			const { data } = await axios.post(
				"/student/reset-password/" + _id,
				password
			);
			// console.log(data);
			dispatch(asynccurrentstudent());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};

export const asyncforgetpasswordstudent =
	(email) => async (dispatch, getState) => {
		try {
			// console.log(getState.student);
			const { data } = await axios.post("/student/send-mail/", email);
			// console.log(data);
			dispatch(asynccurrentstudent());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};

export const asyncotppasswordstudent = (pwd) => async (dispatch, getState) => {
	try {
		// console.log(getState.student);
		const { data } = await axios.post("/student/forget-link/", pwd);
		// console.log(data);
		dispatch(asynccurrentstudent());
	} catch (error) {
		console.log(error);
		dispatch(iserror(error));
	}
};

export const asyncalljobs = () => async (dispatch, getState) => {
	try {
		// console.log(getState.student);
		const { data } = await axios.post("/student/alljobs");
		// console.log(data);
		dispatch(addjobs(data.jobs));
	} catch (error) {
		console.log(error);
		dispatch(iserror(error));
	}
};

export const asyncallinternships = () => async (dispatch, getState) => {
	try {
		// console.log(getState.student);
		const { data } = await axios.post("/student/allinternships");
		// console.log(data);
		dispatch(addinternships(data.internships));
	} catch (error) {
		console.log(error);
		dispatch(iserror(error));
	}
};
export const asyncapplyjobstudent = (id) => async (dispatch, getState) => {
	try {
		// console.log(getState.student);
		const { data } = await axios.post("/student/apply/job/" + id);
		// console.log(data);
		dispatch(asynccurrentstudent());
		dispatch(asyncalljobs());
	} catch (error) {
		console.log(error);
		dispatch(iserror(error));
	}
};

export const asyncapplyinternshipstudent =
	(id) => async (dispatch, getState) => {
		try {
			// console.log(getState.student);
			const { data } = await axios.post("/student/apply/internship/" + id);
			// console.log(data);
			dispatch(asynccurrentstudent());
			dispatch(asyncallinternships());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};

//---------resume ------------- Education------------------------

export const AddEducationStudent =
	(education) => async (dispatch, getState) => {
		// console.log(education);
		try {
			const { data } = await axios.post("/resume/add-education", education);
			// console.log(data);
			dispatch(asynccurrentstudent());
		} catch (error) {
			dispatch(iserror(error));
		}
	};

export const asyncDeleteEducationStudent =
	(id) => async (dispatch, getState) => {
		try {
			// console.log(getState.student);
			const { data } = await axios.post("/resume/delete-education/" + id);
			// console.log(data);
			dispatch(asynccurrentstudent());
			// dispatch(asyncallinternships());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};

export const asyncEditEducationStudent =
	(id, education) => async (dispatch, getState) => {
		try {
			// console.log(getState.student);
			const { data } = await axios.post(
				"/resume/edit-education/" + id,
				education
			);
			// console.log(data);
			dispatch(asynccurrentstudent());
			// dispatch(asyncallinternships());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};

//------------------------resume -------------jobs---------

export const AddJobsStudent = (jobs) => async (dispatch, getState) => {
	// console.log(education);
	try {
		const { data } = await axios.post("/resume/add-jobs", jobs);
		// console.log(data);
		dispatch(asynccurrentstudent());
	} catch (error) {
		dispatch(iserror(error));
	}
};

export const asyncDeleteJobsStudent = (id) => async (dispatch, getState) => {
	try {
		// console.log(getState.student);
		const { data } = await axios.post("/resume/delete-jobs/" + id);
		// console.log(data);
		dispatch(asynccurrentstudent());
		// dispatch(asyncallinternships());
	} catch (error) {
		console.log(error);
		dispatch(iserror(error));
	}
};

export const asyncEditJobsStudent =
	(id, jobs) => async (dispatch, getState) => {
		try {
			// console.log(getState.student);
			const { data } = await axios.post("/resume/edit-jobs/" + id, jobs);
			// console.log(data);
			dispatch(asynccurrentstudent());
			// dispatch(asyncallinternships());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};

//------------------------resume -------------internship---------

export const AddinternshipStudent =
	(internship) => async (dispatch, getState) => {
		// console.log(education);
		try {
			const { data } = await axios.post("/resume/add-internship", internship);
			// console.log(data);
			dispatch(asynccurrentstudent());
		} catch (error) {
			dispatch(iserror(error));
		}
	};

export const asyncDeleteinternshipStudent =
	(id) => async (dispatch, getState) => {
		try {
			// console.log(getState.student);
			const { data } = await axios.post("/resume/delete-internship/" + id);
			// console.log(data);
			dispatch(asynccurrentstudent());
			// dispatch(asyncallinternships());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};

export const asyncEditinternshipStudent =
	(id, internship) => async (dispatch, getState) => {
		try {
			// console.log(getState.student);
			const { data } = await axios.post(
				"/resume/edit-internship/" + id,
				internship
			);
			console.log(data);
			dispatch(asynccurrentstudent());
			// dispatch(asyncallinternships());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};

//------------------------resume -------------projects---------

export const AddprojectsStudent = (projects) => async (dispatch, getState) => {
	// console.log(education);
	try {
		const { data } = await axios.post("/resume/add-projects", projects);
		// console.log(data);
		dispatch(asynccurrentstudent());
	} catch (error) {
		dispatch(iserror(error));
	}
};

export const asyncDeleteprojectsStudent =
	(id) => async (dispatch, getState) => {
		try {
			// console.log(getState.student);
			const { data } = await axios.post("/resume/delete-projects/" + id);
			// console.log(data);
			dispatch(asynccurrentstudent());
			// dispatch(asyncallinternships());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};

export const asyncEditprojectsStudent =
	(id, projects) => async (dispatch, getState) => {
		try {
			// console.log(getState.student);
			const { data } = await axios.post(
				"/resume/edit-projects/" + id,
				projects
			);
			// console.log(data);
			dispatch(asynccurrentstudent());
			// dispatch(asyncallinternships());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};

//------------------------resume -------------courses---------

export const AddCoursesStudent = (courses) => async (dispatch, getState) => {
	// console.log(education);
	try {
		const { data } = await axios.post("/resume/add-courses", courses);
		// console.log(data);
		dispatch(asynccurrentstudent());
	} catch (error) {
		dispatch(iserror(error));
	}
};

export const asyncDeleteCoursesStudent = (id) => async (dispatch, getState) => {
	try {
		// console.log(getState.student);
		const { data } = await axios.post("/resume/delete-courses/" + id);
		// console.log(data);
		dispatch(asynccurrentstudent());
		// dispatch(asyncallinternships());
	} catch (error) {
		console.log(error);
		dispatch(iserror(error));
	}
};

export const asyncEditCoursesStudent =
	(id, courses) => async (dispatch, getState) => {
		try {
			// console.log(getState.student);
			const { data } = await axios.post("/resume/edit-courses/" + id, courses);
			// console.log(data);
			dispatch(asynccurrentstudent());
			// dispatch(asyncallinternships());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};


	//------------------------resume -------------skills---------

export const AddskillsStudent = (skills) => async (dispatch, getState) => {
	// console.log(education);
	try {
		const { data } = await axios.post("/resume/add-skills", skills);
		// console.log(data);
		dispatch(asynccurrentstudent());
	} catch (error) {
		dispatch(iserror(error));
	}
};

export const asyncDeleteskillsStudent = (id) => async (dispatch, getState) => {
	try {
		// console.log(getState.student);
		const { data } = await axios.post("/resume/delete-skills/" + id);
		// console.log(data);
		dispatch(asynccurrentstudent());
		// dispatch(asyncallinternships());
	} catch (error) {
		console.log(error);
		dispatch(iserror(error));
	}
};

export const asyncEditskillsStudent =
	(id, skills) => async (dispatch, getState) => {
		try {
			// console.log(getState.student);
			const { data } = await axios.post("/resume/edit-skills/" + id, skills);
			// console.log(data);
			dispatch(asynccurrentstudent());
			// dispatch(asyncallinternships());
		} catch (error) {
			console.log(error);
			dispatch(iserror(error));
		}
	};