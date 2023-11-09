
            import React from 'react';
            import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
            import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
            import './Documents.css'; // Import your CSS file for styling
            
            const pdfsData = [
              {
                mainTopic: 'Documents',
                subtopics: [
                  {
                    name: 'Project Proposal',
                    pdfs: [
                      { name: 'Proposal Document - IT20188054', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/EUiZxmihTXpMjzpLtOT-drABPHfK1WGvMKA5V9ugyEDxVg?e=IWjur6' },
                      { name: 'Proposal Document - IT20012342', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/EQtxFczRO5xAlQt6tBgnYTgBmaU3mYWJGGh18jpX95Ildg?e=RwL3UK' },
                      { name: 'Proposal Document - IT20186142', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/ETAzqpDkQt9Kh9DJi1EQtsgBAIjjNTCDfHH9PWVMZPXdUQ?e=nFvKib' },
                      { name: 'Proposal Document - IT20183554', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/Ee2_rZgwjaFJtWQdH65hwAMBGtJf9IsJmTmC-RcCiXsYEg?e=9O0qYc' },
                      { name: 'Group Document', link: ''},
                      // Add more proposal PDFs as needed
                    ],
                  },
                  {
                    name: 'Status Document 01',
                    pdfs: [
                      { name: 'Status Document 1 - IT20188054', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/EZaCL7fgEkxEpSQ5knflC_8BTBuSXOzuwn4aPhGIYnNxEw?e=ZDLqFC' },
                      { name: 'Status Document 1 - IT20012342', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/Eanyh93PludHm3E07bE2AgQBqQHi6F6JJ-nWh2ru6klkGQ?e=IMGLCB' },
                      { name: 'Status Document 1 - IT20186142', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/Ec9reKgccjBPgiIHRrmBn80BEMCHH6cSHpO-XiftlyJBog?e=9fwZxy' },
                      { name: 'Status Document 1 - IT20183554', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/EeAHH6hWAMhHlxCzNgepLMEBxge7n6Uca0j27IgZBx0b-A?e=8wZNX2' },
                      // Add more status document PDFs as needed
                    ],
                  },
                  {
                    name: 'Progress Presentation 01',
                    pdfs: [
                      { name: 'Progress Presentation 01', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/Ec0n_TU5r7xCq8gMNQtLBa0BeQnaqEO7KDU5rQBKvk6X2Q?e=2LBqc5' }
                      // Add more status document PDFs as needed
                    ],
                  },
                  {
                    name: 'Research Paper',
                    pdfs: [
                      { name: 'Research Paper', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/EQo4LSm_dJdNjTFHvZXd8VIB6Jq17n6YlgYQNY5IyqCBTQ?e=c7fbkh' }
                      // Add more status document PDFs as needed
                    ],
                  },
                  {
                    name: 'Progress Presentation 02',
                    pdfs: [
                      { name: 'Progress Presentation 02', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/EVbHisupStlLoyWM2bplPjoB_S41K6Ou_2d6OlIhWlNgFA?e=tjHNnY' },
                      { name: 'Poster', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/EfffSD0NZwxEoGLu3HtQtJkBXpOZRETYpmaVBPC1dsOCRA?e=W0eeko' }
                      // Add more status document PDFs as needed
                    ],
                  },
                  {
                    name: 'Final Reports',
                    pdfs: [
                      { name: 'Final Report - Team', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/EWyRCLx3rgRNh0rel2-qIacB02wqzbUCh0cWEtYZ4jLuXA?e=VkYgK6' },
                      { name: 'Final Report - IT20188054', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/ERX6ECCYakhIlfRYuGf-ZkABtU0sKJzR5Jxa8IrSgvAzdw?e=T0LX6h' },
                      { name: 'Final Report - IT20012342', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/EeFVzAaw0mpPrOQ21rQQq4gB5LfmXNmzVx-lS_T58GUfDQ?e=2IKeZb' },
                      { name: 'Final Report - IT20186142', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/EauWBkcw8ZJKkHhPc2JAMKYBce8LEAKj6Ni77JWCWgHhMQ?e=lIvAUJ' },
                      { name: 'Final Report - IT20183554', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/EdYOrqreBzhNsvXOU7MFNh8B_ubb9U69wpxiBft5bJ5nYg?e=gA9PLX' },
                      // Add more status document PDFs as needed
                    ],
                  },
                  {
                    name: 'Status Document 02',
                    pdfs: [
                      { name: 'Status Document 02 - IT20188054', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/EY_HKm4PKP9PtDS9WxDmBzUB_7akxCw1bJtj-3n612Mz8Q?e=UhqQ21' },
                      { name: 'Status Document 02 - IT20012342', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/ES9iilFsgVdEiafO6FrsVY8B9Tt8IWHtlU_ldb72LtJRhQ?e=zhx2yF' },
                      { name: 'Status Document 02 - IT20186142', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/ETILBqkbTe9Osk5qE0hvL7QBuaBPtLyZrX3PJ_SctTcvGA?e=dNQdcY' },
                      { name: 'Status Document 02 - IT20183554', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/EU5WvhVl8NNHhq-LIyOAJEYB7jk4xiNs1DibO1KUxDdVHg?e=Ke6oa1' },
                      // Add more status document PDFs as needed
                    ],
                  },
                  {
                    name: 'Project Registration Documents',
                    pdfs: [
                      { name: 'Topic Assessment', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/ETLQXgEXEGtOmPV2OsKOC4YBOeSgiYtEEf_a2oK8HnQTmA?e=gyVWDO' },
                      { name: 'Project Charter Document', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it20183554_my_sliit_lk/EaEHe3yEX_FIkeI3qwHLGjQBZlITJZSwkjiva3k0WMGMhA?e=XH9cUG' },
                      // Add more status document PDFs as needed
                    ],
                  },
                  // Add more subtopics as needed
                ],
              },
              // Add more main topics and subtopics as needed
            ];
            
            const PdfTile = ({ name, link }) => {
              return ( 
                <a href={link} target="_blank" rel="noopener noreferrer" className="pdf-tile">
                  <FontAwesomeIcon icon={faFilePdf} size="2x" className="pdf-icon" />
                  <p>{name}</p>
                </a>
              );
            };

            
            const Subtopic = ({ subtopic }) => {
              return (
                <div className="subtopic">
                  <h3>{subtopic.name}</h3>
                  <div className="pdf-container">
                  {subtopic.pdfs.map((pdf, index) => (
                      <PdfTile key={index} name={pdf.name} link={pdf.link} />
                    ))}
                  </div>
                  
                </div>
              );
            };
            
            const MainTopic = ({ mainTopic }) => {
              return (
                <div className="main-topic">
                  <h1>{mainTopic.mainTopic}</h1><br></br>
                  {mainTopic.subtopics.map((subtopic, subIndex) => (
                    <Subtopic key={subIndex} subtopic={subtopic} />
                  ))}
                </div>
              );
            };
            
            const App = () => {
              return (
                <div className="app-container">
                  {pdfsData.map((mainTopic, index) => (
                    <MainTopic key={index} mainTopic={mainTopic} />
                  ))}
                </div>
              );
            };
            
            export default App;