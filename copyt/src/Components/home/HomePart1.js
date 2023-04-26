import { Container, Typography } from '@mui/material'
import React from 'react'
import "./HomePart1.css"
import { VscSearch } from 'react-icons/vsc'
import { BiRightArrowAlt } from 'react-icons/bi'

export default function HomePart1() {
    return (
        <>
            <Container maxWidth="xl" disableGutters={true} className='background-image'>
                <Container className='inner-container'>
                    <Typography className='para1'>
                        Join the millions of music lovers who use Reverb to find everything they need to make music
                    </Typography>
                    <h1 className='margin-40 heading1'>Find Your Dream Gear</h1>
                    <div className='flex-parmanent'>
                        <input className='search-input shadow-2side'
                            style={{
                                border: 'solid black 1px', borderRadius: '5px',
                                paddingLeft: '5px'
                            }}
                            placeholder='Search the marketplace...'>
                        </input>
                        <div className='search-icon-div shadow-2side'>
                            <VscSearch />
                        </div>
                    </div>
                    <h3 className='margin-40 heading2'>NEED INSPIRATION? TRY ONE OF THESE</h3>
                    <div style={{ margin: '0', padding: '0' }} className="flex-display" >
                        <div className='flex-ipad'>
                            <div className='flex-parmanent arrow-button shadow-2side'>
                                <Typography style={{ padding: '5px' }}>Teenage Engineering OP-1</Typography>
                                <BiRightArrowAlt style={{ fontSize: '30px' }} />
                            </div>
                            <div className='flex-parmanent arrow-button shadow-2side'>
                                <Typography style={{ padding: '5px' }}>Universal Audio Appolo Twin</Typography>
                                <BiRightArrowAlt style={{ fontSize: '30px' }} />
                            </div>
                        </div>
                        <div className='flex-ipad'>
                            <div className='flex-parmanent arrow-button shadow-2side'>
                                <Typography style={{ padding: '5px' }}>Vox AC30</Typography>
                                <BiRightArrowAlt style={{ fontSize: '30px' }} />
                            </div>
                            <div className='flex-parmanent arrow-button shadow-2side'>
                                <Typography style={{ padding: '5px' }}>Yamaha DX7</Typography>
                                <BiRightArrowAlt style={{ fontSize: '30px' }} />
                            </div>
                        </div>

                    </div>
                    <Container style={{ margin: '0', padding: '0' }} sx={{ display: 'flex' }}>
                        <div className='flex-parmanent arrow-button shadow-2side'>
                            <Typography style={{ padding: '5px' }}>Zildijian New Beat Hi-Hats</Typography>
                            <BiRightArrowAlt style={{ fontSize: '30px' }} />
                        </div>
                    </Container>
                </Container>
            </Container>
        </>
    )
}
