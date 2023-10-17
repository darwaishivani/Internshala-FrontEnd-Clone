"use client";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
	const { student } = useSelector((state) => state.studentReducer);

	return (
		<div>
			<ul>
				<h1>
					Applied Jobs and Internships by{" "}
					<strong>{student && student.firstname}</strong>
				</h1>
				<ul className="border  border-slate-100">
					{student &&
						student.jobs.map((job) => (
							<div
								className="m-3 p-2 border border-teal-900 overflow-auto"
								key={job._id}
							>
								{JSON.stringify(job)}
							</div>
						))}

					{student &&
						student.internships.map((internship) => (
							<div
								className="m-3 p-2 border border-teal-900 overflow-auto"
								key={internship._id}
							>
								{JSON.stringify(internship)}
							</div>
						))}
				</ul>
			</ul>
		</div>
	);
};

export default page;
