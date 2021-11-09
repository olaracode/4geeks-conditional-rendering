import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Twitter, Instagram, LinkedIn } from "@material-ui/icons";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [position, setPosition] = useState("");
	const [twitter, setTwitter] = useState("");
	const [github, setGithub] = useState("");
	const [linkedin, setLinkedin] = useState("");
	const [instagram, setInstagram] = useState("");
	const [role, setRole] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [coverImage, setCover] = useState(false);

	return (
		<>
			<nav className="navbar navbar-light bg-dark mb-3">
				<div className="d-flex">
					<div className="mx-2">
						<p className="my-0 text-white ">Name</p>
						<input type="text" className="form-control" onChange={e => setName(e.target.value)} />
					</div>
					<div className="mx-2">
						<p className="my-0 text-white ">Last name</p>
						<input type="text" className="form-control" onChange={e => setLastName(e.target.value)} />
					</div>
					<div className="mx-2">
						<p className="my-0 text-white ">S.M. Position</p>
						<input type="text" className="form-control" onChange={e => setPosition(e.target.value)} />
					</div>
					<div className="mx-2">
						<p className="my-0 text-white ">Twitter</p>
						<input type="text" className="form-control" onChange={e => setTwitter(e.target.value)} />
					</div>
					<div className="mx-2">
						<p className="my-0 text-white ">Github</p>
						<input type="text" className="form-control" onChange={e => setGithub(e.target.value)} />
					</div>
					<div className="mx-2">
						<p className="my-0 text-white ">LinkedIn</p>
						<input type="text" className="form-control" onChange={e => setLinkedin(e.target.value)} />
					</div>
					<div className="mx-2">
						<p className="my-0 text-white ">Instagram</p>
						<input type="text" className="form-control" onChange={e => setInstagram(e.target.value)} />
					</div>
					<div className="mx-2">
						<p className="my-0 text-white ">Role</p>
						<input type="text" className="form-control" onChange={e => setRole(e.target.value)} />
					</div>
					<div className="mx-2">
						<p className="my-0 text-white ">City</p>
						<input type="text" className="form-control" onChange={e => setCity(e.target.value)} />
					</div>
					<div className="mx-2">
						<p className="my-0 text-white ">Country</p>
						<input type="text" className="form-control" onChange={e => setCountry(e.target.value)} />
					</div>
				</div>
				<div className="form-check m-2">
					<input
						className="form-check-input"
						type="checkbox"
						checked={coverImage}
						onChange={() => setCover(!coverImage)}
						id="defaultCheck1"
					/>
					<label className="form-check-label text-white">Include Cover</label>
				</div>
			</nav>
			<div className="container">
				<div className="card w-50 m-auto">
					<div className={coverImage ? "custom-card-header active" : "custom-card-header"} />
					<div className="d-flex">
						<Link to={`twitter.com/${twitter}`}>
							<Twitter className="custom-icon first" />
						</Link>
						<Link to={`instagram.com/${instagram}`}>
							<Instagram className="instagram" />
						</Link>
						<Link to={`linkedin.com/${linkedin}`}>
							<LinkedIn className="custom-icon third" />
						</Link>
					</div>

					<div className="custom-card-image" />
					<div className="pb-2">
						<h4 className="text-center">
							{name == "" ? <>John</> : <>{name} </>} {lastName == "" ? <>Doe</> : <>{lastName}</>}{" "}
						</h4>
						<h5 className="text-center fw-bold">
							{position == "" ? <>Current Position</> : <>{position}</>}
						</h5>
						<h6 className="text-center">
							{city == "" ? <>Your current city</> : <>{city}</>},{" "}
							<strong>{country == "" ? <>country</> : <>{country}</>} </strong>
						</h6>
					</div>
				</div>
			</div>
		</>
	);
};
