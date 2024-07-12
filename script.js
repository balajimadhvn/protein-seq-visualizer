document.addEventListener('DOMContentLoaded', function() {
    const sequenceInput = document.getElementById('sequenceInput');
    const fileUpload = document.getElementById('fileUpload');
    const submitBtn = document.getElementById('submitBtn');
    const sequenceText = document.getElementById('sequenceText');
    const molWeight = document.getElementById('molWeight');
    const pI = document.getElementById('pI');
    const secondaryStructure = document.getElementById('secondaryStructure');

    submitBtn.addEventListener('click', function() {
        let sequence = sequenceInput.value.trim();
        if (sequence === '' && fileUpload.files.length === 0) {
            alert('Please input a protein sequence or upload a FASTA file.');
            return;
        }

        if (fileUpload.files.length > 0) {
            const reader = new FileReader();
            reader.onload = function(event) {
                sequence = event.target.result.trim();
                displaySequence(sequence);
            };
            reader.readAsText(fileUpload.files[0]);
        } else {
            displaySequence(sequence);
        }
    });

    function displaySequence(sequence) {
        sequenceText.textContent = sequence;
        calculateMolecularWeight(sequence);
        predictIsoelectricPoint(sequence);
        predictSecondaryStructure(sequence);
    }

    function calculateMolecularWeight(sequence) {
        // Mock function - replace with actual calculation
        molWeight.textContent = '12345 g/mol'; // Example value
    }

    function predictIsoelectricPoint(sequence) {
        // Mock function - replace with actual calculation
        pI.textContent = '7.0'; // Example value
    }

    function predictSecondaryStructure(sequence) {
        // Mock function - replace with actual prediction
        secondaryStructure.textContent = 'Helix: 30%, Sheet: 20%, Coil: 50%'; // Example value
    }
});
