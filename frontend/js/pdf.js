// PDF download functionality

async function downloadPDF() {
    if (!currentResumeId) {
        showAlert('Please save your resume first before downloading', 'error');
        return;
    }

    try {
        showAlert('Generating PDF...', 'info');

        const response = await fetch(`${API_URL}/api/resumes/${currentResumeId}/download`, {
            credentials: 'include'
        });

        if (response.ok) {
            // Get the blob from response
            const blob = await response.blob();

            // Create download link
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `resume_${currentResumeId}.pdf`;
            document.body.appendChild(a);
            a.click();

            // Cleanup
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            showAlert('PDF downloaded successfully!', 'success');
        } else {
            const data = await response.json();
            showAlert(data.error || 'Failed to generate PDF', 'error');
        }
    } catch (error) {
        console.error('Download error:', error);
        showAlert('Network error. Please check if the backend is running.', 'error');
    }
}
