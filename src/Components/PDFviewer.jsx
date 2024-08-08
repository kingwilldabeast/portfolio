import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewer = (props) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();


    return (
        <div>
            
            {props.showPdf && (
                <div className="modal-overlay" onClick={props.handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={props.handleCloseModal}>X</button>
                        <div style={{ height: '750px' }}>
                            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                                <Viewer fileUrl={props.pdfFile} plugins={[defaultLayoutPluginInstance]} />
                            </Worker>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PdfViewer;



