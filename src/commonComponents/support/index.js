import cloudbees from '../assets/cloudbees.png'
import osuosl from '../assets/osuosl.png'
import cdf from '../assets/cdf.png'
import redhat from '../assets/redhat.png'
import aws from '../assets/aws.png'
import github from '../assets/github.png'
import jfrog from '../assets/jfrog.png'

function Support() {
    return (
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                We thank the following organizations for their major commitments to support the Jenkins project.
            </div>
            <div class="col-2 text-center">
                <a href="https://cloudbees.com/" target="_blank" rel="noopener noreferrer">
                    <img src={cloudbees} alt=""/>
                </a>
            </div>
            <div class="col-2 text-center">
                <a href="https://osuosl.org/" target="_blank" rel="noopener noreferrer">
                    <img src={osuosl} alt=""/>
                </a>
            </div>
            <div class="col-1 text-center">
            </div>
            <div class="col-2 text-center">
                <a href="https://cd.foundation/" target="_blank" rel="noopener noreferrer">
                    <img src={cdf} alt=""/>
                </a>
            </div>
            <div class="col-2 text-center">
                <a href="https://redhat.com/" target="_blank" rel="noopener noreferrer">
                    <img src={redhat} alt=""/>
                </a>
            </div>
            <div class="col-2 text-center">
                <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
                    <img src={aws} alt=""/>
                </a>
            </div>
            <div class="col-3 text-center">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt=""/>
                </a>
            </div>
            <div class="col-3 text-center">
                <a href="https://jfrog.com/" target="_blank" rel="noopener noreferrer">
                    <img src={jfrog} alt=""/>
                </a>
            </div>
            <div class="col-12 text-center">
                We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.
            </div>
            <div class='col-1 text-center'>
                <a href="https://atlassian.com/" target="_blank" rel="noopener noreferrer">
                    Atlassian
                </a>
            </div>
            <div class='col-1 text-center'>
                <a href="https://www.datadoghq.com/" target="_blank" rel="noopener noreferrer">
                    Datadog
                </a>
            </div>
            <div class='col-1 text-center'>
                <a href="https://maccloud.me/" target="_blank" rel="noopener noreferrer">
                    Mac Cloud
                </a>
            </div>
            <div class='col-1 text-center'>
                <a href="https://pagerduty.com/" target="_blank" rel="noopener noreferrer">
                    PagerDuty
                </a>
            </div>
            <div class='col-1 text-center'>
                <a href="https://sentry.io/" target="_blank" rel="noopener noreferrer">
                    Sentry
                </a>
            </div>
            <div class='col-1 text-center'>
                <a href="https://xmission.com/" target="_blank" rel="noopener noreferrer">
                    XMission
                </a>
            </div>
            <div class='col-2 text-center'>
                <a href="https://www.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer">
                    Tsinghua University
                </a>
            </div>
            <div class='col-1 text-center'>
                <a href="https://www.fastly.com/" target="_blank" rel="noopener noreferrer">
                    Fastly
                </a>
            </div>
            <div class='col-1 text-center'>
                <a href="https://spinup.com/" target="_blank" rel="noopener noreferrer">
                    SpinUp
                </a>
            </div>
            <div class='col-1 text-center'>
                <a href="https://www.ibm.com/" target="_blank" rel="noopener noreferrer">
                    IBM
                </a>
            </div>         
        </div>
    );
}
export default Support;