class MockProviderA {
  async sendEmail(email) {
    console.log('MockProviderA: Sending email...');
    return Math.random() > 0.3;
  }
}

module.exports = MockProviderA;