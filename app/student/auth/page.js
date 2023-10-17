"use client";
import {
	asyncapplyinternshipstudent,
	asyncapplyjobstudent,
} from "@/store/Actions/studentActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
	const { jobs, internships, student } = useSelector(
		(state) => state.studentReducer
	);
	const dispatch = useDispatch();

	const ApplyJobHandler = (id) => {
		dispatch(asyncapplyjobstudent(id));
	};

	const ApplyInternshipHandler = (id) => {
		dispatch(asyncapplyinternshipstudent(id));
	};

	useEffect(() => {}, [student]);
	return (
		<div>
			<h1>
				Available jobs for <strong>{student && student.firstname}</strong>
			</h1>
			<ul className="border  border-slate-100">
				{jobs &&
					jobs.map((job) => (
						<div
							className="m-3 p-2 border border-teal-900 overflow-auto"
							key={job._id}
						>
							{JSON.stringify(job)}

							<br />
							{!job.students.includes(student && student._id) ? (
								<button
									onClick={() => ApplyJobHandler(job._id)}
									className="button p-3 border "
								>
									Apply job
								</button>
							) : (
								<h3>Already applied</h3>
							)}
						</div>
					))}
			</ul>

			<hr />

			<h1>
				Available internships for
				<strong>{student && student.firstname}</strong>
			</h1>
			<ul className="border  border-slate-100">
				{internships &&
					internships.map((internship) => (
						<div
							className="m-3 p-2 border border-teal-900 overflow-auto"
							key={internship._id}
						>
							{JSON.stringify(internship)}
							<br />

							{console.log(internship._id)}
							{!internship.students.includes(student && student._id) ? (
								<button
									onClick={() => ApplyInternshipHandler(internship._id)}
									className="button p-3 border "
								>
									Apply internships
								</button>
							) : (
								<h3>Already applied</h3>
							)}
						</div>
					))}
			</ul>
		</div>
	);
};

export default page;
