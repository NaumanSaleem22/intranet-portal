import React from 'react';
import { commonImages } from '../../common/images';

const MainHrDocumentComponent = () => {
  return (
    <div className='HR-Documents-div'>
                        <div className='HR-Documents-heading'>
                            <span><img src={commonImages.HrDocNew} alt="Documents-icon" /></span> <h4>HR Documents</h4>
                        </div>
                        <div className='download-div-docs mt-2'>
                            <div className='hr-docs-name'>
                                <div>
                                    <img src={commonImages.PowerPointIcon} alt="powerpoint-img" />
                                </div>
                                <div className='docs-div'>
                                    <h6>
                                        Department_Overheads.xlsx
                                    </h6>
                                    <p>
                                        Date: 05/04/2022
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button> <img src={commonImages.DownloadIconNew} /></button>
                            </div>
                        </div>
                        <div className='download-div-docs'>
                            <div className='hr-docs-name'>
                                <div>
                                    <img src={commonImages.ExcelIcon} alt="powerpoint-img" />
                                </div>
                                <div className='docs-div'>
                                    <h6>
                                        Brands_to_grow.pptx
                                    </h6>
                                    <p>
                                        Date: 05/04/2022
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button><img src={commonImages.DownloadIconNew} /> </button>
                            </div>
                        </div>
                        <div className='download-div-docs'>
                            <div className='hr-docs-name'>
                                <div>
                                    <img src={commonImages.WordIcon} alt="powerpoint-img" />
                                </div>
                                <div className='docs-div'>
                                    <h6>
                                        List-of-stores.docx
                                    </h6>
                                    <p>
                                        Date: 05/04/2022
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button>  <img src={commonImages.DownloadIconNew} /> </button>
                            </div>
                        </div>
                        <div className='download-div-docs'>
                            <div className='hr-docs-name'>
                                <div>
                                    <img src={commonImages.PowerPointIcon} alt="powerpoint-img" />
                                </div>
                                <div className='docs-div'>
                                    <h6>
                                        Department_Overheads.xlsx
                                    </h6>
                                    <p>
                                        Date: 05/04/2022
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button> <img src={commonImages.DownloadIconNew} /></button>
                            </div>
                        </div>
                        <div className='download-div-docs'>
                            <div className='hr-docs-name'>
                                <div>
                                    <img src={commonImages.ExcelIcon} alt="powerpoint-img" />
                                </div>
                                <div className='docs-div'>
                                    <h6>
                                        Department_Overheads.xlsx
                                    </h6>
                                    <p>
                                        Date: 05/04/2022
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button>  <img src={commonImages.DownloadIconNew} /></button>
                            </div>
                        </div>


                        <div className="docs-view-all-btn mt-2">
                            <button>
                                View All
                            </button>
                        </div>
                    </div>
  )
}

export default MainHrDocumentComponent