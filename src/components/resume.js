import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
};

export default class Resume extends Component {
    state = {
        file: '/assets/Web-designer-Resume.pdf',
        numPages: null,
        
    }

    onFileChange = (event) => {
        this.setState({
            file: event.target.files[0],
        });
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { file, numPages } = this.state;

        return (
            <Container>
                <Typography align="center" variant="h4">Resume
        </Typography>
                <Document 
                    file={file}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    options={options}
                >
                    {
                        Array.from(
                            new Array(numPages),
                            (el, index) => (
                                <Page
                                    scale= {1.6} 
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                />
                            ),
                        )
                    }
                </Document>
            </Container>
        );
    }
}