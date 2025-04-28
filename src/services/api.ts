// This file will simulate a backend API service
// In a real application, you would connect to your actual backend

// Types for our blog data
export interface Author {
  id: number;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  authorId: number;
  categoryIds: number[];
  featured?: boolean;
}

// Mock data
const authors: Author[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Sarah is a writer and mother of two from San Francisco. She shares her experiences of motherhood through her writing.'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Michael is a family therapist with a special interest in mother-child relationships and bonding.'
  },
  {
    id: 3,
    name: 'Emily Chen',
    avatar: 'https://images.pexels.com/photos/3754208/pexels-photo-3754208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Emily is a lifestyle blogger and photographer who loves documenting her journey as a first-time mother.'
  }
];

const categories: Category[] = [
  { id: 1, name: 'Stories', slug: 'stories' },
  { id: 2, name: 'Gift Ideas', slug: 'gifts' },
  { id: 3, name: 'History', slug: 'history' },
  { id: 4, name: 'Celebration Ideas', slug: 'celebration' }
];

const posts: Post[] = [
  {
    id: 1,
    title: 'The Journey of Motherhood: Lessons Learned',
    slug: 'journey-of-motherhood',
    excerpt: 'Exploring the beautiful, challenging, and transformative journey of being a mother, from the first moments to watching them grow.',
    content: `
      <p>The journey of motherhood is unlike any other. From the moment you first hold your child in your arms, a profound transformation begins. It's a path filled with love, challenges, learning, and immense growth.</p>

      <h2>The Early Days</h2>
      <p>Those first few weeks are a blur of sleepless nights, feeding schedules, and overwhelming love. Every parent's experience is different, but the adjustment period is universal. We learn to function on minimal sleep, to interpret different cries, and to trust our instincts.</p>
      
      <p>What nobody tells you is how quickly you adapt. The human capacity to adjust to new circumstances is remarkable, and mothers exemplify this resilience beautifully.</p>

      <h2>Finding Your Identity</h2>
      <p>One of the biggest challenges many mothers face is reconciling their pre-motherhood identity with their new role. It's a delicate balance – maintaining your sense of self while embracing the all-encompassing role of being someone's mother.</p>
      
      <p>Many women find that motherhood doesn't replace their identity but adds a rich, complex layer to it. Others discover new passions and purposes through raising their children.</p>

      <h2>The Learning Never Stops</h2>
      <p>If there's one constant in motherhood, it's that you never stop learning. Every developmental stage brings new challenges and joys. Just when you think you've mastered one phase, your child moves into another, requiring different skills and approaches.</p>
      
      <p>This continuous evolution keeps mothers adaptable, open-minded, and eternally students of their children.</p>

      <h2>The Community of Mothers</h2>
      <p>There's a special bond between mothers – a shared understanding that transcends differences in parenting styles or philosophies. This community can be a lifeline during difficult times, offering advice, empathy, and the reassurance that you're not alone.</p>

      <h2>Lessons That Last a Lifetime</h2>
      <p>The lessons learned through motherhood extend far beyond parenting skills. Mothers often find themselves developing:</p>
      <ul>
        <li>Unparalleled patience</li>
        <li>Greater empathy</li>
        <li>Improved time management</li>
        <li>The ability to function despite exhaustion</li>
        <li>Tremendous resilience</li>
        <li>Newfound creativity in problem-solving</li>
      </ul>

      <p>These skills serve women well in all aspects of life, from personal relationships to professional endeavors.</p>

      <h2>The Greatest Gift</h2>
      <p>Perhaps the most beautiful aspect of motherhood is seeing the world anew through your child's eyes. There's something magical about rediscovering simple wonders – the moon, butterflies, splashing in puddles – alongside someone experiencing them for the first time.</p>
      
      <p>This gift of renewed perspective is one of motherhood's greatest treasures, reminding us to slow down and appreciate the moment.</p>

      <p>The journey of motherhood is not always easy. It tests your limits, challenges your assumptions, and demands more than you sometimes feel you can give. But it also offers unparalleled joy, profound connection, and the privilege of shaping the next generation. It is, quite simply, the hardest job you'll ever love.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/4262010/pexels-photo-4262010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2024-04-15',
    authorId: 1,
    categoryIds: [1],
    featured: true
  },
  {
    id: 2,
    title: 'Thoughtful Mother\'s Day Gift Ideas',
    slug: 'thoughtful-mothers-day-gifts',
    excerpt: 'Move beyond flowers and chocolates with these meaningful gift ideas that show mom just how much you appreciate everything she does.',
    content: `
      <p>Mother's Day is a special opportunity to show appreciation for the incredible women who have nurtured, supported, and loved us unconditionally. While traditional gifts like flowers and chocolates are always appreciated, sometimes finding something more personal can make the day even more memorable.</p>

      <h2>Experiences Over Things</h2>
      <p>Many mothers will tell you that what they want most is quality time with their loved ones. Consider these experience-based gifts:</p>
      
      <ul>
        <li><strong>Cooking Class:</strong> Sign up for a mother-daughter/son cooking class where you can learn new recipes together.</li>
        <li><strong>Spa Day:</strong> Book a relaxing spa day complete with massages, facials, and uninterrupted relaxation time.</li>
        <li><strong>Workshop:</strong> Does mom have a hobby or interest she's always wanted to explore? Find a local workshop in pottery, painting, floral arrangement, or whatever might spark her interest.</li>
        <li><strong>Concert or Show:</strong> Tickets to see her favorite musician, a Broadway show, or a local theater production can create lasting memories.</li>
      </ul>

      <h2>Handmade with Love</h2>
      <p>Handmade gifts carry special significance because they represent time and effort invested in creating something unique:</p>
      
      <ul>
        <li><strong>Memory Book:</strong> Compile photos and written memories from family members into a beautiful scrapbook.</li>
        <li><strong>Recipe Collection:</strong> Gather family recipes, especially those passed down through generations, and create a custom cookbook.</li>
        <li><strong>Handwritten Letter:</strong> In our digital age, a heartfelt, handwritten letter expressing your love and gratitude can be deeply moving.</li>
        <li><strong>Custom Artwork:</strong> Create a piece of art that represents your relationship or incorporates elements that are meaningful to her.</li>
      </ul>

      <h2>Practical Luxury</h2>
      <p>Think about what would make mom's everyday life more comfortable or enjoyable:</p>
      
      <ul>
        <li><strong>Premium Versions of Everyday Items:</strong> High-quality bedding, luxurious bath products, or gourmet kitchen tools she might not splurge on herself.</li>
        <li><strong>Subscription Services:</strong> Monthly deliveries of books, wine, coffee, or specialty foods that she can enjoy throughout the year.</li>
        <li><strong>Tech That Simplifies:</strong> Smart home devices, e-readers, or other technology that aligns with her interests and makes life easier.</li>
        <li><strong>Custom Comfort:</strong> A weighted blanket, ergonomic cushions, or other items designed to enhance comfort and well-being.</li>
      </ul>

      <h2>Personalized Treasures</h2>
      <p>Adding personalization transforms an ordinary gift into something special:</p>
      
      <ul>
        <li><strong>Custom Jewelry:</strong> Pieces featuring birthstones, coordinates of significant locations, or engraved messages.</li>
        <li><strong>Personalized Stationery:</strong> Beautiful notepads, cards, or a custom stamp with her name or monogram.</li>
        <li><strong>Custom Family Portrait:</strong> Commission an artist to create a family portrait in a style that matches mom's aesthetic.</li>
        <li><strong>Name a Star:</strong> Register a star in her name through the International Star Registry for a truly unique gift.</li>
      </ul>

      <h2>Gifts That Give Back</h2>
      <p>For the mom who values social consciousness:</p>
      
      <ul>
        <li><strong>Ethical Products:</strong> Items from companies with strong social or environmental missions.</li>
        <li><strong>Charitable Donations:</strong> Make a contribution in her name to a cause she's passionate about.</li>
        <li><strong>Fair Trade Goods:</strong> Handcrafted items that support artisans from around the world.</li>
      </ul>

      <h2>The Gift of Time</h2>
      <p>Perhaps the most valuable gift of all:</p>
      
      <ul>
        <li><strong>Service Coupons:</strong> Create vouchers for tasks like household chores, gardening, or tech support that she can redeem throughout the year.</li>
        <li><strong>Scheduled Check-ins:</strong> For adult children who live far away, commit to regular video calls or visits.</li>
        <li><strong>Taking Over Responsibilities:</strong> Arrange to handle certain responsibilities for a day, a week, or even longer to give mom a break.</li>
      </ul>

      <p>Remember, the most meaningful gifts reflect thoughtfulness and an understanding of what would truly bring joy to the mother in your life. Consider her unique personality, interests, and needs when selecting a gift, and don't underestimate the power of accompanying any present with sincere words of appreciation.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2024-04-28',
    authorId: 3,
    categoryIds: [2, 4],
    featured: true
  },
  {
    id: 3,
    title: 'The History of Mother\'s Day Around the World',
    slug: 'history-mothers-day-around-world',
    excerpt: 'Discover the fascinating origins and diverse traditions of Mother\'s Day celebrations across different cultures and countries.',
    content: `
      <p>Mother's Day is celebrated around the world, but its history, dates, and traditions vary significantly across cultures. This rich tapestry of celebrations reflects the universal importance of mothers while honoring diverse cultural values.</p>

      <h2>American Origins</h2>
      <p>The American version of Mother's Day, celebrated on the second Sunday in May, has its roots in the early 20th century. Anna Jarvis is credited with creating the holiday after campaigning for a day to honor mothers following her own mother's death in 1905.</p>
      
      <p>The first official Mother's Day was celebrated at Andrews Methodist Episcopal Church in Grafton, West Virginia, on May 10, 1908. By 1914, President Woodrow Wilson had signed a proclamation designating the second Sunday in May as a national holiday to honor mothers.</p>
      
      <p>Interestingly, Jarvis later became disillusioned with the commercialization of the holiday and spent much of her later life and inheritance fighting against what she saw as the exploitation of Mother's Day by the floral and greeting card industries.</p>

      <h2>Ancient Roots</h2>
      <p>While the modern holiday has relatively recent origins, celebrations honoring mothers and motherhood can be traced back to ancient civilizations:</p>
      
      <ul>
        <li><strong>Ancient Greece:</strong> The Greeks held spring festivals in honor of Rhea, the mother of the gods.</li>
        <li><strong>Ancient Rome:</strong> The Romans celebrated a spring festival called Hilaria dedicated to Cybele, a mother goddess.</li>
        <li><strong>Early Christians:</strong> "Mothering Sunday" was celebrated in the United Kingdom and parts of Europe on the fourth Sunday in Lent. It was originally a time when the faithful would return to their "mother church" for a special service.</li>
      </ul>

      <h2>Around the World Today</h2>
      <p>Today, Mother's Day is celebrated in more than 50 countries, though not all on the same date:</p>
      
      <h3>United Kingdom and Ireland</h3>
      <p>Mothering Sunday is celebrated on the fourth Sunday in Lent. While it began as a Christian tradition, it has evolved into a day to honor mothers with cards, flowers, and gifts.</p>
      
      <h3>Mexico</h3>
      <p>El Día de la Madre is always celebrated on May 10, regardless of the day of the week. It's a fixed date celebration marked by lively festivities, with restaurants typically experiencing their busiest day of the year.</p>
      
      <h3>France</h3>
      <p>La Fête des Mères is celebrated on the last Sunday in May (or the first Sunday in June if Pentecost falls on the last Sunday in May). The day became an official celebration under Napoleon, but its modern version evolved after World War I as part of efforts to repopulate France.</p>
      
      <h3>Ethiopia</h3>
      <p>Mother's Day is celebrated as part of Antrosht, a multi-day celebration at the end of the rainy season (typically in fall). Families gather for large meals and celebrations, with daughters bringing vegetables, cheese, and butter while sons bring meat.</p>
      
      <h3>Japan</h3>
      <p>Mother's Day (Haha no Hi) is celebrated on the second Sunday in May. It grew in popularity after World War II and now typically involves children presenting their mothers with carnations, which symbolize the gentle strength of mothers.</p>
      
      <h3>India</h3>
      <p>A relatively new holiday in India, it has been embraced in urban areas and is celebrated on the second Sunday in May. It blends Western practices with traditional cultural values honoring motherhood.</p>
      
      <h3>Russia</h3>
      <p>Russia celebrates a day similar to Mother's Day on International Women's Day (March 8). This holiday honors all women, with special attention given to mothers.</p>

      <h2>Unique Traditions</h2>
      <p>The ways people honor mothers vary as much as the dates:</p>
      
      <ul>
        <li><strong>Serbia:</strong> Mother's Day is part of a three-day celebration including Children's Day and Father's Day. In a charming tradition, children tie up their mother on Mother's Day, and she can only be freed when she gives them treats and gifts.</li>
        <li><strong>Thailand:</strong> Mother's Day is celebrated on August 12, the birthday of Queen Sirikit, who is regarded as the mother of all Thai people. Jasmine is the traditional gift.</li>
        <li><strong>Peru:</strong> Mother's Day celebrations often include chocolates, performances by school children, and visits to cemeteries to honor deceased mothers.</li>
        <li><strong>Nepal:</strong> The Nepalese celebration, Mata Tirtha Aunsi, includes pilgrimages to the Mata Tirtha pond, where it's believed to bring good fortune to see your mother's face reflected in the water.</li>
      </ul>

      <h2>The Universal Element</h2>
      <p>Despite these differences, Mother's Day celebrations worldwide share common elements: expressions of love, acts of service, gifts or tokens of appreciation, and quality time spent together. These universal aspects reflect the fundamental human desire to honor the nurturers, caretakers, and strong women who shape our lives.</p>

      <p>The diverse ways in which cultures celebrate mothers reveal both our unique cultural values and our shared appreciation for maternal love and sacrifice. As Mother's Day continues to evolve and spread to new cultures, it remains a powerful reminder of the universal importance of mothers in human society.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2024-04-10',
    authorId: 2,
    categoryIds: [3],
    featured: false
  },
  {
    id: 4,
    title: 'Creative Ways to Celebrate Mother\'s Day',
    slug: 'creative-ways-celebrate-mothers-day',
    excerpt: 'Go beyond the traditional celebrations with these creative ideas to make Mother\'s Day truly special and memorable.',
    content: `
      <p>Mother's Day is an opportunity to celebrate the incredible women who have nurtured and shaped our lives. While traditional celebrations like breakfast in bed and flower bouquets are always appreciated, sometimes thinking outside the box can create even more memorable experiences. Here are some creative ways to celebrate the mothers in your life this year.</p>

      <h2>Create a Memory Time Capsule</h2>
      <p>Compile meaningful items that represent your relationship with your mother or your journey as a mother. Include photos, handwritten notes, small mementos, and predictions for the future. Seal it together and decide on a future date to open it – perhaps on another Mother's Day five or ten years from now.</p>

      <h2>Organize a Mother's Day Interview</h2>
      <p>Set up a recorded interview with your mother, asking her questions about her life, childhood memories, hopes and dreams, and experiences as a mother. This not only makes for a meaningful conversation but also creates a precious keepsake that can be shared with future generations.</p>
      
      <h2>Plan a Themed Day Based on Her Interests</h2>
      <p>If she loves art, plan an art-themed day with a visit to a museum, a home painting session, and dinner at a restaurant with great art on the walls. If she's a book lover, take her to a bookstore, have a reading picnic, and watch a film adaptation of her favorite novel. The possibilities are endless and can be customized to any interest or hobby.</p>

      <h2>Create a "Things I Learned From Mom" Book</h2>
      <p>Collect stories and lessons from family members about what they've learned from the mother being celebrated. Compile these into a book with photos, quotes, and personal anecdotes. This can be done digitally with simple book-making websites or traditionally with scrapbooking materials.</p>

      <h2>Host a Skills Exchange Day</h2>
      <p>Set up a day where you teach your mother something you're good at, and she teaches you something she excels in. Maybe you show her how to use a new technology, and she teaches you her secret family recipe or gardening techniques. This creates a meaningful bonding experience and celebrates the exchange of knowledge between generations.</p>

      <h2>Arrange a Mother's Day "Flash Mob"</h2>
      <p>Coordinate with family members and friends to show up unexpectedly at her favorite park, restaurant, or even her home, each bringing a small gift or token of appreciation. The surprise element and seeing how many people want to celebrate her will create an unforgettable memory.</p>

      <h2>Plan a "Mom's Choice Day"</h2>
      <p>Give her a list of your available time and a budget, then let her plan exactly what she wants to do. Some mothers might choose activities that involve the whole family, while others might enjoy having you take over responsibilities so they can have some quiet time to themselves.</p>

      <h2>Create a "Year of Monthly Treats" Calendar</h2>
      <p>Instead of just one day of celebration, create a calendar with a pre-planned treat or experience for each month of the coming year. These could include movie nights, hikes, lunch dates, or at-home spa experiences. This extends the appreciation beyond just one day and gives her something to look forward to regularly.</p>

      <h2>Digitize and Organize Her Memories</h2>
      <p>Offer to digitize old photos, organize digital photo libraries, or create online albums of family memories. This practical gift preserves precious memories and makes them more accessible for her to enjoy and share.</p>

      <h2>Plant a Mother's Day Garden</h2>
      <p>Choose plants that have special meaning or simply ones that she loves, and create a garden space together. This can be as small as a windowsill herb garden or as large as a backyard flower bed. The garden will continue to grow and bloom, serving as a lasting reminder of your appreciation.</p>

      <h2>Start a Mother-Child Book Club</h2>
      <p>Select a book you'll both enjoy and set a date to discuss it. This could become a regular tradition that fosters connection through shared reading experiences and discussions.</p>

      <h2>Create a Family Cookbook</h2>
      <p>Collect and organize family recipes, especially those passed down through generations. Include photos, stories about the recipes, and memories of meals shared together. This celebrates family culinary traditions and her role in nourishing the family.</p>

      <h2>Write a Song or Poem</h2>
      <p>Create an original piece that expresses your feelings. Don't worry about making it perfect – the personal touch and effort are what make it special. Perform or present it as part of your celebration.</p>

      <h2>The Gift of Life Stories</h2>
      <p>Give her a journal specifically designed to record life stories, with prompts to help her share her experiences, wisdom, and memories. This not only encourages her to reflect on her life journey but also creates a treasured family heirloom.</p>

      <h2>Plan a Virtual Celebration</h2>
      <p>If you can't be together physically, organize a virtual gathering with family members from around the world. Plan games, share stories, or even coordinate to have meals delivered to each location so you can "share" a meal together despite the distance.</p>

      <p>The most meaningful Mother's Day celebrations are those that reflect genuine appreciation and understanding of who she is as a person – her interests, preferences, and the ways she enjoys spending time. Whether elaborate or simple, the best gift is showing her that you see her, value her, and want to celebrate everything she brings to your life.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/1157399/pexels-photo-1157399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2024-05-01',
    authorId: 3,
    categoryIds: [4, 2],
    featured: true
  },
  {
    id: 5,
    title: 'An Open Letter to First-Time Mothers',
    slug: 'open-letter-first-time-mothers',
    excerpt: 'Words of wisdom, encouragement, and solidarity for women embarking on the transformative journey of motherhood for the first time.',
    content: `
      <p>Dear First-Time Mother,</p>

      <p>Right now, you might be reading this while pregnant, waiting with anticipation and perhaps a touch of anxiety for your little one to arrive. Or maybe you're in those early days, holding your newborn, wondering how something so small could completely transform your world. Wherever you are on this journey, I want to share some thoughts that I wish someone had shared with me when I was standing where you are now.</p>

      <h2>Trust Yourself</h2>
      <p>In a world full of parenting books, blogs, and well-meaning advice from everyone (including strangers in the grocery store), it's easy to feel overwhelmed and uncertain. Remember this: you know your child better than anyone else. Trust your instincts. That inner voice that tells you something isn't right, or that suggests a different approach might work better for your baby – listen to it.</p>
      
      <p>This doesn't mean you shouldn't seek information or support. It just means that ultimately, you are the expert on your unique child and your unique family situation.</p>

      <h2>The Days Are Long, But the Years Are Short</h2>
      <p>This might sound like a cliché, but there's profound truth in it. There will be days that seem endless – days of cluster feeding, sleepless nights, and moments when you can't remember the last time you showered or had a complete conversation. In those moments, it's hard to imagine that you'll ever miss this phase.</p>
      
      <p>Yet somehow, time performs its peculiar magic. Those long days stack up into weeks and months that seem to accelerate with each passing season. Before you know it, you're looking at baby photos with a lump in your throat, wondering where your tiny newborn went.</p>
      
      <p>Try to be present when you can. Not all the time – that's impossible – but in small moments throughout the day. Feel the weight of your baby in your arms, notice the perfect curl of their fingers, listen to the little sounds they make. These are the details that will become precious memories.</p>

      <h2>It's Okay to Not Love Every Moment</h2>
      <p>Despite what perfectly filtered social media posts might suggest, motherhood isn't a constant state of bliss. It's okay to admit that some parts are really hard. It's okay to miss aspects of your pre-baby life. It's okay to need a break.</p>
      
      <p>Acknowledging these feelings doesn't make you a bad mother – it makes you human. The love you have for your child can coexist with exhaustion, frustration, and occasionally wondering what you've gotten yourself into. Give yourself grace in these moments.</p>

      <h2>Your Body Has Done Something Remarkable</h2>
      <p>Whether you gave birth vaginally, via C-section, or became a mother through adoption or other means, your body has undergone profound changes. Be patient with yourself as you adjust to these changes. The pressure to "bounce back" is intense but unnecessary.</p>
      
      <p>Focus instead on recovery, on nourishing yourself, on developing a healthy relationship with this new version of your body. It may look and feel different, but it has done (and continues to do) something truly extraordinary.</p>

      <h2>Ask For and Accept Help</h2>
      <p>There's a strange expectation that mothers should be able to do it all – care for a completely dependent human being while keeping the household running, possibly working outside the home, and maintaining some semblance of self-care. This expectation is not just unrealistic; it's harmful.</p>
      
      <p>Asking for help isn't a sign of weakness or failure. It's a sign of wisdom. Accept meals from friends, say yes when someone offers to hold the baby while you shower, delegate tasks to your partner, consider hiring help if that's accessible to you. Remember the proverb: "It takes a village to raise a child." You don't have to do this alone.</p>

      <h2>Find Your People</h2>
      <p>Speaking of villages, finding a community of supportive fellow mothers can be transformative. Look for parent groups, either locally or online, where you can share experiences, ask questions without judgment, and feel understood.</p>
      
      <p>Particularly valuable are connections with mothers at a similar stage and those who are a few steps ahead on the journey. The former provide real-time solidarity; the latter offer perspective and the reassurance that you will, in fact, survive the current challenges.</p>

      <h2>Your Relationship Will Change</h2>
      <p>If you have a partner, your relationship will inevitably transform after having a baby. You'll need to navigate new roles, different divisions of responsibility, and the challenge of maintaining your connection amidst the demands of parenthood.</p>
      
      <p>Communication becomes more important than ever. Be honest about your needs, listen to your partner's, and remember that you're on the same team. Schedule time for just the two of you, even if it's just 15 minutes of undistracted conversation at the end of the day.</p>

      <h2>You Are Still You</h2>
      <p>Becoming a mother adds a profound new dimension to your identity, but it doesn't erase who you were before. Your interests, passions, career ambitions, and need for personal space don't disappear when your baby arrives.</p>
      
      <p>Finding ways to nurture these aspects of yourself isn't selfish – it's essential. The happier and more fulfilled you are as a person, the better you can show up as a mother. Whether it's returning to a beloved hobby, maintaining professional goals, or simply having regular time to yourself, prioritize the things that make you feel like you.</p>

      <h2>There Is No One "Right Way" to Mother</h2>
      <p>Perhaps the most important thing to remember is that there are countless ways to be a good mother. Breast or bottle, co-sleeping or crib, staying at home or working outside the home, attachment parenting or more structured approaches – these aren't moral choices, just different paths that work for different families.</p>
      
      <p>What matters is that your child is loved, safe, and that your choices work for your unique family situation. Resist the urge to compare or judge – both yourself and others. We're all doing our best with the resources and information we have.</p>

      <h2>This Phase Is Temporary</h2>
      <p>When you're in the thick of a challenging phase – sleep regressions, teething, separation anxiety – it can feel like it will never end. But one of the few certainties in parenting is that nothing stays the same for long. Your baby will sleep through the night eventually. They won't always need to be held constantly. The challenging phases end, giving way to new joys and, yes, new challenges.</p>
      
      <p>Take photos, journal if that appeals to you, and try to notice the small daily changes. One day, these memories will be precious.</p>

      <h2>You Are Enough</h2>
      <p>In moments of doubt and exhaustion, when you're questioning your choices or feeling overwhelmed by the responsibility of shaping a human life, remember this: you are exactly the mother your child needs. Your love, your effort, your presence – these are enough.</p>
      
      <p>You won't do it perfectly. None of us do. But you'll do it with love, and that makes all the difference.</p>

      <p>Welcome to motherhood. It's messy and magical, exhausting and exhilarating. There's nothing quite like it, and while the learning curve is steep, so are the rewards. You've got this.</p>

      <p>With solidarity and support,</p>
      <p>A Mother Who's Been There</p>
    `,
    coverImage: 'https://images.pexels.com/photos/4473874/pexels-photo-4473874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2024-05-05',
    authorId: 1,
    categoryIds: [1],
    featured: false
  }
];

// API functions
export const getPosts = (): Promise<Post[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(posts);
    }, 300);
  });
};

export const getPost = (id: number): Promise<Post | undefined> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(posts.find(post => post.id === id));
    }, 300);
  });
};

export const getPostBySlug = (slug: string): Promise<Post | undefined> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(posts.find(post => post.slug === slug));
    }, 300);
  });
};

export const getFeaturedPosts = (): Promise<Post[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(posts.filter(post => post.featured));
    }, 300);
  });
};

export const getRecentPosts = (count: number = 3): Promise<Post[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const sorted = [...posts].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      resolve(sorted.slice(0, count));
    }, 300);
  });
};

export const getRelatedPosts = (postId: number, count: number = 3): Promise<Post[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const post = posts.find(p => p.id === postId);
      if (!post) {
        resolve([]);
        return;
      }
      
      // Find posts in the same categories
      const related = posts
        .filter(p => p.id !== postId && p.categoryIds.some(cat => post.categoryIds.includes(cat)))
        .slice(0, count);
        
      resolve(related);
    }, 300);
  });
};

export const getPostsByCategory = (categoryId: number): Promise<Post[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(posts.filter(post => post.categoryIds.includes(categoryId)));
    }, 300);
  });
};

export const getPostsByCategorySlug = (slug: string): Promise<Post[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const category = categories.find(cat => cat.slug === slug);
      if (!category) {
        resolve([]);
        return;
      }
      resolve(posts.filter(post => post.categoryIds.includes(category.id)));
    }, 300);
  });
};

export const getAuthor = (id: number): Promise<Author | undefined> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(authors.find(author => author.id === id));
    }, 300);
  });
};

export const getCategories = (): Promise<Category[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(categories);
    }, 300);
  });
};

export const getCategory = (id: number): Promise<Category | undefined> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(categories.find(category => category.id === id));
    }, 300);
  });
};

export const getCategoryBySlug = (slug: string): Promise<Category | undefined> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(categories.find(category => category.slug === slug));
    }, 300);
  });
};

export const searchPosts = (query: string): Promise<Post[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      resolve(posts.filter(post => 
        post.title.toLowerCase().includes(lowerQuery) || 
        post.excerpt.toLowerCase().includes(lowerQuery) || 
        post.content.toLowerCase().includes(lowerQuery)
      ));
    }, 300);
  });
};