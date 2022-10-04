import classNames from 'classnames/bind'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Round from '../../../Components/Round/Round'
import Styles from './Ingredients.module.scss'

const cx = classNames.bind(Styles)

function Ingredients () {

    const Contents =[
        {
            id:1,
            title: 'mild butter',
            content: "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce"
        },
        {
            id: 2,
            title: 'slices beef',
            content: "Get quality Beef Slices at Tesco. Shop in store or online"
        },
        {
            id: 3,
            title: 'sleek onion',
            content: "Green onions have a sleek linear shape with white or pale-green bulbs and long green tops"
        },
        {
            id: 4,
            title: 'fresh bread',
            content: "Homemade bread is more nutritious than your store-bought variety"
        },
        {
            id: 5,
            title: 'lettuce leaf',
            content: "It is most often grown as a leaf vegetable, but sometimes for its stem and seeds"
        },
        {
            id: 6,
            title: "glow cheese",
            content: 'It is most often grown as a leaf vegetable, but sometimes for its stem and seeds'
        }
    ]

    return(
        <div className={cx('wrapper')}>
            <div id="container" >
                <div className={cx('ingredients')}>
                    <Box sx={{flexGrow:2}} className={cx('box')}>
                        <Grid container spacing={2} >
                            <Grid item xs={2}>
                                <div> 
                                </div>
                            </Grid>
                            <Grid item xs={10}>
                                <Box sx={{flexGrow:2}}  className={cx('box-content')}>
                                    <Grid container spacing={1}>
                                            {Contents.map(content=>(
                                                <Grid item xs={12}  key={content.id} id='round'>
                                                    <div id="underline-border">
                                                        <h2 className={cx('title')}>{content.title}</h2>
                                                        <p className={cx('content')}>{content.content}</p>
                                                    </div>
                                                    <Round
                                                        width= '80px'
                                                        height= '80px'
                                                        left= {'-15%'}
                                                        bottom= {0}
                                                        list
                                                        children={content.id}
                                                    />
                                                </Grid>
                                            ))}
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
            <div id='blur-bacground' ></div>
        </div>
    )
}

export default Ingredients