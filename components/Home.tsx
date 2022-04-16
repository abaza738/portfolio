import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import moment from "moment";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import styles from '../styles/Home.module.scss';

const Home: NextPage = ({ data }: InferGetServerSidePropsType<GetServerSideProps>) => {

    const info = data.info[0];
    const exp = data.experience;
    const edu = data.education;

    return (
        <>
            <div className={styles.header}>
                <div className={styles.background}></div>
                <Typography variant='h2' sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    <span className='terminal-sign'>$ </span>
                    {info.name}
                    <span className='cursor'><b>_</b></span>
                </Typography>
                <Typography variant='subtitle1' alignSelf='flex-end'>
                    {info.title} at <a href={info.employer?.link} target="_blank">{info.employer?.name}</a>
                </Typography>
            </div>

            <div className={styles.main}>

                <Typography variant='h3' textAlign='center'>
                    Skills
                </Typography>

                <Grid container spacing={2} sx={{ padding: '2rem 0', alignContent: 'stretch' }}>

                    <Grid item xs={6}>
                        <Card sx={{ display: 'flex', height: '100%' }}>
                            <CardMedia
                                component='img'
                                sx={{ padding: '2rem', width: '150px', objectFit: 'contain' }}
                                image='/img/angular.png'
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem' }}>
                                <Typography variant='h6'>Angular</Typography>
                                <Typography>Building complex web applications using Angular.</Typography>
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item xs={6}>
                        <Card sx={{ display: 'flex', height: '100%' }}>
                            <CardMedia
                                component='img'
                                sx={{ padding: '2rem', width: '150px', objectFit: 'contain' }}
                                image='/img/nestjs.svg'
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem' }}>
                                <Typography variant='h6'>NestJS</Typography>
                                <Typography>Building complex web applications using NestJS.</Typography>
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item xs={6}>
                        <Card sx={{ display: 'flex', height: '100%' }}>
                            <CardMedia
                                component='img'
                                sx={{ padding: '2rem', width: '150px', objectFit: 'contain' }}
                                image='/img/nextjs.png'
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem' }}>
                                <Typography variant='h6'>NextJS</Typography>
                                <Typography>Building complex web applications using NextJS.</Typography>
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item xs={6}>
                        <Card sx={{ display: 'flex', height: '100%' }}>
                            <CardMedia
                                component='img'
                                sx={{ padding: '2rem', width: '150px', objectFit: 'contain' }}
                                image='/img/react.png'
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem' }}>
                                <Typography variant='h6'>React</Typography>
                                <Typography>Building complex web applications using React.</Typography>
                            </Box>
                        </Card>
                    </Grid>

                </Grid>

                <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant='h6'>Born</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent color='GrayText'>
                            <Typography>{moment().diff(moment(info.birthday), 'days')} Days Ago</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

                <Typography variant='h3' textAlign='center'>
                    Education
                </Typography>

                <Timeline position='alternate'>
                    <TimelineItem sx={{ minHeight: '35px' }}>
                        <TimelineSeparator>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent></TimelineContent>
                    </TimelineItem>
                    {
                        edu.map((item: any, index: number) => {
                            return (
                                <TimelineItem key={item._id}>
                                    <TimelineOppositeContent color='GrayText'>
                                        <span>{moment(item.from).format('MMM. YYYY')} → {moment(item.to).format('MMM. YYYY')}</span>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot variant='outlined' />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography variant='h6' component='span'>{item.school}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            )
                        })
                    }
                </Timeline>

                <Typography variant='h3' textAlign='center'>
                    Experience
                </Typography>

                <Timeline position='alternate'>
                    <TimelineItem sx={{ minHeight: '35px' }}>
                        <TimelineSeparator>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent></TimelineContent>
                    </TimelineItem>
                    {
                        exp.map((item: any, index: number) => {
                            return (
                                <TimelineItem key={item._id}>
                                    <TimelineOppositeContent color='GrayText'>
                                        <span>{moment(item.from).format('MMM. YYYY')} → {item.hasOwnProperty('to') ? moment(item.to).format('MMM. YYYY') : 'Present'}</span>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography variant='h6'>{item.title}</Typography>
                                        <Typography>{item.employer}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            )
                        })
                    }
                    <TimelineItem sx={{ minHeight: '35px' }}></TimelineItem>
                    <Typography variant='body1' textAlign='center'>
                        Are you next?
                        <br />
                        <Button variant="contained" href="mailto:maher.abaza@proton.me">Let me know!</Button>
                    </Typography>
                </Timeline>

            </div>
        </>
    )
}

export default Home;