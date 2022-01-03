// import styles from '../../styles/projects.module.scss';
import styles from './projects.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { server } from '../../config';
const projects = ({ projects }) => {
	// console.log(projects);
	return (
		<>
			<Head>
				<title>Our Projects</title>
				<meta
					name='description'
					content='A professional web developer and digital marketing specialist'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section className={styles.container}>
				<h1>Our Projects</h1>
				<div className={styles.services}>
					{projects.map((project) => (
						<div key={project.id} className={styles.service}>
							<Image
								placeholder='blur'
								src={project.image}
								alt={project.name}
								blurDataURL={project.image}
								width={1440}
								height={1024}
								objectFit='cover'
							/>
							<h3>{project.name}</h3>
							<p> {project.description} </p>

							<div className={styles.links}>
								<Link href={`${project.github}`} className={styles.link}>
									View on Github
								</Link>
								<Link href={`${project.website}`} className={styles.link}>
									View Live
								</Link>
							</div>
							<p className={styles.technology}>
								{project.technologies
									.toString()
									.split(',')
									.map((technology) => (
										<span key={technology}>{technology}</span>
									))}
							</p>
							<Link href={`/projects/${project.slug}`} className={styles.link}>
								View Project
							</Link>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default projects;

export async function getStaticProps() {
	// export async function getServerSideProps() {
	const response = await fetch(`${server}/api/projects`);
	const data = await response.json();
	// console.log(data);

	return {
		props: {
			projects: data
		}
	};
}
