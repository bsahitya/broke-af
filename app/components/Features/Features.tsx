const features = [
  { emoji: '📈', title: 'Real stock prices, fake consequences.' },
  { emoji: '🤡', title: 'Compete with friends to see who loses less!' },
  { emoji: '🤑', title: 'Learn trading without filing bankruptcy.' },
];

const Features = () => {
  return (
    <section id='features' className='py-10 bg-gray-100'>
      <h2 className='text-3xl font-bold text-center mb-6'>Why BrokeAF?</h2>
      <div className='flex flex-wrap justify-center gap-6'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='bg-white shadow-md rounded p-6 max-w-sm text-center'>
            <div className='text-4xl mb-4'>{feature.emoji}</div>
            <h3 className='text-xl font-semibold'>{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
