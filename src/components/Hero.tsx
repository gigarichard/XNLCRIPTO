








import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

import AnimatedSection from '@/components/AnimatedSection';
import CopyButton from '@/components/CopyButton';

import { CONTRACT } from '@/constant/contract';

export default function Hero() {
  return (
    <AnimatedSection className='flex flex-wrap justify-center items-center relative text-white text-center py-10 bg-cover bg-center'>
      <div className='w-80 md:w-96 lg:w-1/2 aspect-square relative'>
        <Image
          fill
          className='imglogo'
          src={CONTRACT.logo1}
          alt='Animated etf logo'
        />
      </div>
      <div className='text-white w-full m-0 md:m-10 lg:m-0 md:w-1/3 lg:w-1/2 flex flex-col justify-center items-center gap-10'>
        <h1 className='text-3xl text-center lg:text-5xl font-extrabold break-words lg:px-4 mt-6 lg:mt-0 text-zinc-900'>
          Welcome to <br />
          <div className='typewriter-oneline'>
            <span className='text-center text-4xl lg:text-7xl text-transparent glow-text bg-text-gradient-1 bg-clip-text'>
              {CONTRACT.name}
            </span>
          </div>
        </h1>
        <Link
          href={`https://t.me/gigarichard`}
          target='_blank'
          className='w-full md:w-1/2 lg:w-1/2'
        >
          <button
            type='button'
            className='text-zinc-900 flex justify-center gap-x-2 items-center  w-full border-black hover:bg-black hover:text-white border focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-full text-lg px-5 py-2.5 me-2 mb-2 '
          >
            BUY
            <FiExternalLink className='size-6' />
          </button>
        </Link>
        <div className='flex justify-center items-center gap-x-3 mx-auto w-full'>
          <p className='text-zinc-900'>CA: </p>
          <div className=' text-white border border-blue-500 rounded-lg w-1/2 md:w-1/2'>
            <input
              type='text'
              className='py-3 px-4 block rounded-lg text-sm w-full md:w-full placeholder:text-white focus:border-blue-500 focus:ring-blue-500 bg-gray-900 border-gray-700'
              value={`${CONTRACT.ca}`}
              title={`${CONTRACT.ca}`}
              disabled
            />
          </div>
          <CopyButton value={`${process.env.NEXT_PUBLIC_CA}`} />
        </div>
        <Link href='https://t.me/gigarichard' target='_blank'>
          <p className='text-xl lg:text-2xl text-zinc-900 underline'>Start on the 15th of the month.</p>
        </Link>
      </div>
















      
    </AnimatedSection>
  );
}







var labels = ['weeks', 'days', 'hours', 'minutes', 'seconds'],
  TimerCount = (new Date().getFullYear() + 1) + '/01/01',
  template = _.template( jQuery('#main-example-template').html()),
  currDate = '00:00:00:00:00',
  nextDate = '00:00:00:00:00',
  parser = /([0-9]{2})/gi,
  $example = jQuery('#main-example');

  if( $example.data("timer").length ){
    TimerCount = $example.data("timer");  
  }

// Parse countdown string to an object
function strfobj(str) {
  var parsed = str.match(parser),
    obj = {};
  labels.forEach(function(label, i) {
    obj[label] = parsed[i]
  });
  return obj;
}
// Return the time components that diffs
function diff(obj1, obj2) {
  var diff = [];
  labels.forEach(function(key) {
    if (obj1[key] !== obj2[key]) {
      diff.push(key);
    }
  });
  return diff;
}
// Build the layout
var initData = strfobj(currDate);
labels.forEach(function(label, i) {
  $example.append(template({
    curr: initData[label],
    next: initData[label],
    label: label
  }));
});
// Starts the countdown
$example.countdown(TimerCount, function(event) {
  var newDate = event.strftime('%w:%d:%H:%M:%S'),
    data;

  if (newDate !== nextDate) {
    currDate = nextDate;
    nextDate = newDate;
    // Setup the data
    data = {
      'curr': strfobj(currDate),
      'next': strfobj(nextDate)
    };
    // Apply the new values to each node that changed
    diff(data.curr, data.next).forEach(function(label) {
      var selector = '.%s'.replace(/%s/, label),
        $node = $example.find(selector);
      // Update the node
      $node.removeClass('flip');
      $node.find('.curr').text(data.curr[label]);
      $node.find('.next').text(data.next[label]);
      // Wait for a repaint to then flip
      _.delay(function($node) {
        $node.addClass('flip');
      }, 50, $node);
    });
  }
});






