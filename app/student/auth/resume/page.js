"use client";

import {
	asyncDeleteCoursesStudent,
	asyncDeleteEducationStudent,
	asyncDeleteJobsStudent,
	asyncDeleteinternshipStudent,
	asyncDeleteprojectsStudent,
	asyncDeleteskillsStudent,
} from "@/store/Actions/studentActions";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
	const { student } = useSelector((state) => state.studentReducer);
	const dispatch = useDispatch();

	const DeleteEducationHandler = (id) => {
		dispatch(asyncDeleteEducationStudent(id));
	};
	const DeleteJobHandler = (id) => {
		dispatch(asyncDeleteJobsStudent(id));
	};
	const DeleteinternshipHandler = (id) => {
		dispatch(asyncDeleteinternshipStudent(id));
	};
	const DeletecoursesHandler = (id) => {
		dispatch(asyncDeleteCoursesStudent(id));
	};
	const DeleteprojectsHandler = (id) => {
		dispatch(asyncDeleteprojectsStudent(id));
	};
	const DeleteskillsHandler = (id) => {
		dispatch(asyncDeleteskillsStudent(id));
	};

	return (
		<div className="mt-5">
			<h3>This is your resume section </h3>
			<h4>
				Education <Link href="/student/auth/resume/education">+</Link>
			</h4>
			<ul className="m-4 flex flex-col gap-5">
				{student &&
					student.resume.education.map((e) => (
						<div key={e.id}>
							{JSON.stringify(e)}
							<br />
							<Link
								className="mx-4 my-2 p-2 px-4 bg-blue-900 text-white rounded"
								href={`/student/auth/resume/education/${e.id}`}
							>
								Edit
							</Link>

							<button
								className="mx-4 my-2 p-2 bg-red-700 text-white rounded "
								onClick={() => DeleteEducationHandler(e.id)}
							>
								Delete
							</button>
						</div>
					))}
			</ul>
			<hr />
			<h4>
				Jobs <Link href="/student/auth/resume/jobs">+</Link>
			</h4>
			<ul className="m-4 flex flex-col gap-5">
				{student &&
					student.resume.jobs.map((e) => (
						<div key={e.id}>
							{JSON.stringify(e)}
							<br />
							<Link
								className="mx-4 my-2 p-2 px-4 bg-blue-900 text-white rounded"
								href={`/student/auth/resume/jobs/${e.id}`}
							>
								Edit
							</Link>

							<button
								className="mx-4 my-2 p-2 bg-red-700 text-white rounded "
								onClick={() => DeleteJobHandler(e.id)}
							>
								Delete
							</button>
						</div>
					))}
			</ul>
			<hr />
			<h4>
				Internship <Link href="/student/auth/resume/internships">+</Link>
			</h4>
			<ul className="m-4 flex flex-col gap-5">
				{student &&
					student.resume.internships.map((e) => (
						<div key={e.id}>
							{JSON.stringify(e)}
							<br />
							<Link
								className="mx-4 my-2 p-2 px-4 bg-blue-900 text-white rounded"
								href={`/student/auth/resume/internships/${e.id}`}
							>
								Edit
							</Link>

							<button
								className="mx-4 my-2 p-2 bg-red-700 text-white rounded "
								onClick={() => DeleteinternshipHandler(e.id)}
							>
								Delete
							</button>
						</div>
					))}
			</ul>
			<hr />
			<h4>
				Projects <Link href="/student/auth/resume/projects">+</Link>
			</h4>
			<ul className="m-4 flex flex-col gap-5">
				{student &&
					student.resume.projects.map((e) => (
						<div key={e.id}>
							{JSON.stringify(e)}
							<br />
							<Link
								className="mx-4 my-2 p-2 px-4 bg-blue-900 text-white rounded"
								href={`/student/auth/resume/projects/${e.id}`}
							>
								Edit
							</Link>

							<button
								className="mx-4 my-2 p-2 bg-red-700 text-white rounded "
								onClick={() => DeleteprojectsHandler(e.id)}
							>
								Delete
							</button>
						</div>
					))}
			</ul>
			<hr />
			<h4>
				Skills <Link href="/student/auth/resume/skills">+</Link>
			</h4>
			<ul className="m-4 flex flex-col gap-5">
				{student &&
					student.resume.skills.map((e) => (
						<div key={e.id}>
							{JSON.stringify(e)}
							<br />
							<Link
								className="mx-4 my-2 p-2 px-4 bg-blue-900 text-white rounded"
								href={`/student/auth/resume/skills/${e.id}`}
							>
								Edit
							</Link>

							<button
								className="mx-4 my-2 p-2 bg-red-700 text-white rounded "
								onClick={() => DeleteskillsHandler(e.id)}
							>
								Delete
							</button>
						</div>
					))}
			</ul>
			<hr />
			<h4>
				Courses <Link href="/student/auth/resume/courses">+</Link>
			</h4>
			<ul className="m-4 flex flex-col gap-5">
				{student &&
					student.resume.courses.map((e) => (
						<div key={e.id}>
							{JSON.stringify(e)}
							<br />
							<Link
								className="mx-4 my-2 p-2 px-4 bg-blue-900 text-white rounded"
								href={`/student/auth/resume/courses/${e.id}`}
							>
								Edit
							</Link>

							<button
								className="mx-4 my-2 p-2 bg-red-700 text-white rounded "
								onClick={() => DeletecoursesHandler(e.id)}
							>
								Delete
							</button>
						</div>
					))}
			</ul>
			<hr />
		</div>
	);
};

export default page;
