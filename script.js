const quizData = [
  {
    question: "What makes up a quality circle team?",
    options: [
      "Only upper management",
      "External consultants",
      "A group of workers from the same or different department",
      "A group of customers"
    ],
    answer: 2
  },
  {
    question: "A quality circle is primarily used for:",
    options: [
      "Production planning",
      "Continuous improvement",
      "Product design",
      "Strategic planning"
    ],
    answer: 1
  },
  {
    question: "Identify the best suitable Kaizen approach for problem-solving.",
    options: [
      "Top-down decision-making",
      "Reactive, only addressing problems after they occur",
      "Proactive, focusing on constant, small improvements",
      "Ignoring employee feedback in decision-making"
    ],
    answer: 2
  },
  {
    question: "The main goal of Six Sigma methodology is:",
    options: [
      "To eliminate defects and improve quality",
      "Increase production speed",
      "To reduce the number of employees",
      "To lower operational costs without considering quality"
    ],
    answer: 0
  },
  {
    question: "Which tools and techniques support the TQM process?",
    options: [
      "Statistical Process Control (SPC), Six Sigma, Pareto Analysis, and Root Cause Analysis",
      "Lean Management, SWOT Analysis, Fishbone Diagram, and 5S",
      "Benchmarking, BCG Matrix, Process Mapping, and Gantt Charts",
      "SWOT Analysis, Value Stream Mapping, Balanced Scorecard"
    ],
    answer: 0
  },
  {
    question: "In a Kanban system, what does a Kanban card typically represent?",
    options: [
      "A detailed list of orders",
      "A request for more raw materials",
      "A visual signal for replenishing inventory",
      "A work schedule for employees"
    ],
    answer: 2
  },
  {
    question: "The primary purpose of the Kanban card system is:",
    options: [
      "To track employee performance",
      "To manage inventory and control the flow of materials",
      "To improve employee scheduling",
      "To track customer feedback"
    ],
    answer: 1
  },
  {
    question: "The primary goal of the 'Set in Order' step of 5S is to:",
    options: [
      "Eliminate waste by minimizing unnecessary items in the workspace",
      "Clean and maintain all equipment",
      "Organize tools and materials for easy access and flow",
      "Create standard operating procedures"
    ],
    answer: 2
  },
  {
    question: "Which of the following is NOT a key element of TPM?",
    options: [
      "Corrective maintenance",
      "Scheduled preventive maintenance",
      "Employee involvement in maintenance prevention",
      "Outsourcing all equipment repairs"
    ],
    answer: 3
  },
  {
    question: "The 'Overproduction' waste in Lean Manufacturing refers to:",
    options: [
      "Producing more than what is needed, leading to excess inventory",
      "The time workers spend waiting for resources or information",
      "The unnecessary movement of materials or products between workstations",
      "The cost of maintaining excessive inventory"
    ],
    answer: 0
  },
  {
    question: "The abbreviation 'ISO' stands for:",
    options: [
      "International Service Organization",
      "International Standards Organization",
      "International System Organization",
      "International Organization for Standardization"
    ],
    answer: 1
  },
  {
    question: "The key types of quality standards include the following except:",
    options: [
      "FDA standards",
      "ISO standards",
      "Lean/Agile Quality standards",
      "PERT/CPM"
    ],
    answer: 3
  },
  {
    question: "Which of the following is NOT a quality standard?",
    options: [
      "ISO 9001",
      "ISO 14001",
      "Six Sigma",
      "ISO 50001"
    ],
    answer: 3
  },
  {
    question: "The PDCA cycle stands for:",
    options: [
      "Plan-Do-Check-Act",
      "Plan-Do-Check-Assess",
      "Prepare-Differ-Correct-Act",
      "Plan-Do-Cite-Advice"
    ],
    answer: 0
  },
  {
    question: "OSHA’s General Industry Standard includes:",
    options: [
      "Excavation",
      "Workplace safety",
      "Risk from shipboard operations",
      "Tractor safety"
    ],
    answer: 1
  },
  {
    question: "ERP system uses which platform?",
    options: [
      "Decentralized",
      "Autocratic",
      "Centralized",
      "Democratic"
    ],
    answer: 2
  },
  {
    question: "Which of the following is NOT a benefit of implementing an ERP system?",
    options: [
      "Increased efficiency in business processes",
      "Improved productivity across different departments",
      "Lack of real-time information",
      "Better coordination and communication between departments"
    ],
    answer: 2
  },
  {
    question: "The primary goal of ERP (Enterprise Resource Planning) systems is to:",
    options: [
      "Increase company profits by reducing employee salaries",
      "Increase productivity and provide real-time data",
      "Manage employee personal information",
      "Reduce the need for communication across departments"
    ],
    answer: 1
  },
  {
    question: "The main advantage of cloud-based ERP systems includes:",
    options: [
      "Higher upfront costs",
      "Limited accessibility",
      "Scalability and lower upfront costs",
      "Only accessible through PCs"
    ],
    answer: 2
  },
  {
    question: "Cloud-based ERP solutions are preferred for accessing software remotely because they:",
    options: [
      "Can only be accessed during business hours",
      "Provide limited access to employees outside the office",
      "Allow access from anywhere, at any time, on any device",
      "Require complex local installations"
    ],
    answer: 2
  },
  {
    question: "Which ISO standard focuses on quality management systems?",
    options: [
      "ISO 14001",
      "ISO 9001",
      "ISO 45001",
      "ISO 50001"
    ],
    answer: 1
  },
  {
    question: "Which of the following is a direct benefit of implementing ISO standards?",
    options: [
      "Increased bureaucracy",
      "Improved risk management and reduced operational costs",
      "Limited product development",
      "Decreased employee involvement in decision-making"
    ],
    answer: 1
  },
  {
    question: "ISO certification helps to improve within an organization:",
    options: [
      "Marketing and production strategies",
      "Organizational hierarchy",
      "Financial investments only",
      "Efficiency, quality, and customer satisfaction"
    ],
    answer: 3
  },
  {
    question: "The key focus of ISO 14001, part of the ISO 14000 series, is:",
    options: [
      "Enhancing financial performance only",
      "Implementing energy-efficient practices",
      "Establishing environmental management systems",
      "Setting prices for environmentally friendly products"
    ],
    answer: 2
  },
  {
    question: "Which ISO standard focuses on environmental management systems?",
    options: [
      "ISO 14001",
      "ISO 9001",
      "ISO 45001",
      "ISO 50001"
    ],
    answer: 0
  },
  {
    question: "What is the primary purpose of marketing techniques?",
    options: [
      "Increase production costs",
      "Satisfy customer needs and increase sales",
      "Limit the number of products in the market",
      "Reduce competition"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT one of the Seven P’s of Marketing?",
    options: [
      "Product",
      "Price",
      "Positioning",
      "Promotion"
    ],
    answer: 2
  },
  {
    question: "‘Place’ in the Seven P’s of Marketing refers to:",
    options: [
      "The geographical location of the company headquarters",
      "The distribution channels used to deliver the product to consumers",
      "The online presence of a business",
      "The price strategy adopted by a company"
    ],
    answer: 1
  },
  {
    question: "In marketing management strategy, ROI means:",
    options: [
      "Return on investment",
      "Refer on Interest",
      "Rate of Interest",
      "Range of Internet"
    ],
    answer: 0
  },
  {
    question: "Marketing management systems are used to drive:",
    options: [
      "Only long-term goals",
      "Short-term results and long-term growth",
      "Narrow mind",
      "Only short-term result"
    ],
    answer: 1
  },
  {
    question: "The 'Price' element in marketing refers to:",
    options: [
      "The cost of raw materials",
      "The amount a customer pays for a product or service",
      "The salary of employees in a company",
      "The advertising budget"
    ],
    answer: 1
  },
  {
    question: "Which option best describes 'needs' in marketing?",
    options: [
      "A strong desire for a specific product",
      "Basic requirement for human survival",
      "A luxury that enhances lifestyle",
      "A product that satisfies a person's craving"
    ],
    answer: 1
  },
  {
    question: "On the basis of marketing management, CRM is:",
    options: [
      "Customer Range Manufacturing",
      "Company Rate Material",
      "Customer Range Meaning",
      "Customer Relationship Management"
    ],
    answer: 3
  },
  {
    question: "‘A person might want a specific type of food like pizza, burger’ is an example of:",
    options: [
      "Customer Need",
      "Customer Want",
      "Customer Demand",
      "Customer Perfection"
    ],
    answer: 1
  },
  {
    question: "Supply Chain Management (SCM) primarily involves:",
    options: [
      "Managing customer complaints and product returns",
      "Coordinating and monitoring the flow of goods, services, and information from raw materials to final product delivery",
      "Designing marketing strategies to boost product sales",
      "Handling financial transactions and payroll management"
    ],
    answer: 1
  },
  {
    question: "Logistics management:",
    options: [
      "Increases costs and reduces customer satisfaction",
      "Optimizes efficiency and enhances customer satisfaction, leading to revenue growth",
      "Has no impact on revenue",
      "Reduces inventory accuracy"
    ],
    answer: 1
  },
  {
    question: "Supply chain management contributes to business success:",
    options: [
      "By increasing product prices",
      "By delivering products on time, enhancing customer satisfaction, and boosting revenue",
      "By decreasing product availability",
      "By minimizing customer interactions"
    ],
    answer: 1
  },
  {
    question: "What is the primary goal of Supply Chain Management (SCM)?",
    options: [
      "To maximize production costs",
      "To reduce customer satisfaction",
      "To deliver the right product at the right time, location, and cost",
      "To decrease supplier relationships"
    ],
    answer: 2
  },
  {
    question: "Which are the main components involved in supply chain management?",
    options: [
      "Procurement, inventory management, distribution, and delivery",
      "Marketing, branding, and customer loyalty",
      "Finance, accounting, and tax management",
      "Advertising, human resource management"
    ],
    answer: 0
  },
  {
    question: "What is the role of transportation in Supply Chain Management (SCM)?",
    options: [
      "Production optimization",
      "Demand forecasting",
      "Movement of goods from one location to another",
      "Procurement negotiation"
    ],
    answer: 2
  },
  {
    question: "What is the importance of warehousing in Supply Chain Management (SCM)?",
    options: [
      "Reducing the need for inventory",
      "Storage and efficient management of inventory",
      "Eliminating transportation needs",
      "Only providing security for goods"
    ],
    answer: 1
  },
  {
    question: "What is the primary objective of Supply Chain Management?",
    options: [
      "Delivering the right product to the right place at the right time and cost",
      "Increasing warehousing costs",
      "Decreasing customer demand",
      "Reducing supplier involvement"
    ],
    answer: 0
  },
  {
    question: "Sourcing in Supply Chain Management relates to:",
    options: [
      "Focusing on customer satisfaction; production focuses on storage",
      "Selecting suppliers that provide the best combination of cost, quality, and reliability",
      "Transportation",
      "Order fulfilment"
    ],
    answer: 1
  },
  {
    question: "Choose the key component of logistics.",
    options: [
      "Supplier auditing",
      "Market research",
      "Delivery of goods to customers",
      "Production scheduling"
    ],
    answer: 2
  },
  {
    question: "ERP systems help supply chain operations by:",
    options: [
      "Isolated data management",
      "Integrating functions such as procurement, inventory, and order processing",
      "Slower communication across departments",
      "Increased lead times"
    ],
    answer: 1
  },
  {
    question: "What is the role of predictive analytics in supply chain management?",
    options: [
      "Eliminating the need for data-driven decision-making",
      "Increasing transportation costs",
      "Forecasting demand and anticipating supply chain disruptions",
      "Limiting the use of technology in logistics"
    ],
    answer: 2
  },
  {
    question: "A key advantage of IoT devices in logistics management is:",
    options: [
      "Reducing supply chain visibility",
      "Tracking the movement and condition of goods in real-time",
      "Increasing manual monitoring requirements",
      "Limiting communication between supply chain partners"
    ],
    answer: 1
  },
  {
    question: "The primary focus of IT-enabled SCM is on:",
    options: [
      "Real-time communication and visibility",
      "Manual data entry",
      "Marketing of the product",
      "Branding of the products"
    ],
    answer: 0
  },
  {
    question: "One of the benefits of using IT in supply chain management is:",
    options: [
      "Increased lead times and inefficiencies",
      "Enhanced collaboration and data-driven decision-making",
      "Higher operational costs without insights",
      "Reduced transparency in supply chain operations"
    ],
    answer: 1
  },
  {
    question: "What is the significance of HRM to an organization?",
    options: [
      "Limiting employee engagement initiatives",
      "Enhancing employee productivity and organizational culture",
      "Eliminating the need for compliance with labor laws",
      "Focusing only on recruitment and dismissal processes"
    ],
    answer: 1
  },
  {
    question: "What is the role of training and development for employees?",
    options: [
      "Decreasing skill levels over time",
      "Increasing employee frustration due to repetitive tasks",
      "Improving employees' skills and knowledge for better performance",
      "Limiting employees' exposure to new technologies"
    ],
    answer: 2
  },
  {
    question: "Which is a key component of HRM related to employee assessment?",
    options: [
      "Performance management",
      "Recruitment and selection",
      "Compensation and benefits",
      "Work-life balance initiatives"
    ],
    answer: 0
  },
  {
    question: "Ethical considerations in HRM focus on:",
    options: [
      "Offering competitive salaries",
      "Adherence to legal and ethical standards",
      "Limiting employee concerns",
      "Increasing work-life conflicts"
    ],
    answer: 1
  },
  {
    question: "Which HRM principle can improve employee morale?",
    options: [
      "Ignoring work-life balance",
      "Focusing only on compensation",
      "Promoting work-life balance initiatives",
      "Limiting employee development opportunities"
    ],
    answer: 2
  },
  {
    question: "What is the significance of HRM as a primary contribution to an organization?",
    options: [
      "Limiting employee engagement initiatives",
      "Enhancing employee productivity and organizational culture",
      "Eliminating the need for compliance with labor laws",
      "Focusing only on recruitment and dismissal processes"
    ],
    answer: 1
  },
  {
    question: "What is the role of training and development as a key benefit for employees?",
    options: [
      "Decreasing skill levels over time",
      "Increasing employee frustration due to repetitive tasks",
      "Improving employees' skills and knowledge for better performance",
      "Limiting employees' exposure to new technologies"
    ],
    answer: 2
  },
  {
    question: "Which is a key component of HRM related to employee assessment?",
    options: [
      "Performance management",
      "Recruitment and selection",
      "Compensation and benefits",
      "Work-life balance initiatives"
    ],
    answer: 0
  },
  {
    question: "Which principle can help improve employee morale?",
    options: [
      "Ignoring work-life balance",
      "Focusing only on compensation",
      "Promoting work-life balance initiative",
      "Limiting employee development opportunities"
    ],
    answer: 2
  },
  {
    question: "What is the primary purpose of the 'Chalk Circle' technique in the Toyota Production System?",
    options: [
      "To train employees in drawing techniques",
      "To encourage managers to physically participate in production",
      "To develop observation skills for identifying inefficiencies and areas for improvement",
      "To mark safety zones on the shop floor"
    ],
    answer: 2
  },
  {
    question: "Which leadership style involves centralized decision-making?",
    options: [
      "Democratic Leadership",
      "Transformational Leadership",
      "Laissez-Faire Leadership",
      "Autocratic Leadership"
    ],
    answer: 3
  },
  {
    question: "Which leadership style is based on shared decision-making and participation?",
    options: [
      "Autocratic Leadership",
      "Democratic Leadership",
      "Laissez-Faire Leadership",
      "Transformational Leadership"
    ],
    answer: 1
  },
  {
    question: "In which leadership style do leaders inspire and motivate employees to achieve higher goals and visions?",
    options: [
      "Democratic Leadership",
      "Autocratic Leadership",
      "Laissez-Faire Leadership",
      "Transformational Leadership"
    ],
    answer: 3
  },
  {
    question: "What is the key feature of Laissez-Faire leadership?",
    options: [
      "The leader makes all decisions",
      "Employees have the freedom to make decisions",
      "The leader supervises all actions closely",
      "The leader focuses on inspiring employees"
    ],
    answer: 1
  },
  {
    question: "Which leadership style fits an environment requiring strict control?",
    options: [
      "Autocratic Leadership",
      "Democratic Leadership",
      "Transformational Leadership",
      "Laissez-Faire Leadership"
    ],
    answer: 0
  }
];

const quizContainer = document.getElementById("quiz-container");
const scoreElement = document.getElementById("score");
const answeredElement = document.getElementById("answered");
const totalElement = document.getElementById("total");
const resetBtn = document.getElementById("resetBtn");

let score = 0;
let answeredCount = 0;

totalElement.textContent = quizData.length;

function createQuiz() {
  quizContainer.innerHTML = "";
  score = 0;
  answeredCount = 0;

  scoreElement.textContent = score;
  answeredElement.textContent = answeredCount;
  totalElement.textContent = quizData.length;

  quizData.forEach((item, qIndex) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const number = document.createElement("div");
    number.className = "question-number";
    number.textContent = `Question ${qIndex + 1}`;

    const question = document.createElement("div");
    question.className = "question-text";
    question.textContent = item.question;

    const optionsBox = document.createElement("div");
    optionsBox.className = "options";

    const resultBox = document.createElement("div");
    resultBox.className = "result-box";

    item.options.forEach((optionText, optionIndex) => {
      const button = document.createElement("button");
      button.className = "option-btn";
      button.innerHTML = `<strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${optionText}`;

      button.addEventListener("click", () => {
        const allButtons = optionsBox.querySelectorAll(".option-btn");

        allButtons.forEach((btn, index) => {
          btn.disabled = true;

          if (index === item.answer) {
            btn.classList.add("correct");
          }
        });

        answeredCount++;
        answeredElement.textContent = answeredCount;

        if (optionIndex === item.answer) {
          button.classList.add("correct");
          resultBox.textContent = "Correct answer";
          resultBox.className = "result-box correct-msg";
          score++;
          scoreElement.textContent = score;
        } else {
          button.classList.add("wrong");
          resultBox.textContent = `Wrong answer. Correct option is ${String.fromCharCode(65 + item.answer)}.`;
          resultBox.className = "result-box wrong-msg";
        }
      });

      optionsBox.appendChild(button);
    });

    card.appendChild(number);
    card.appendChild(question);
    card.appendChild(optionsBox);
    card.appendChild(resultBox);

    quizContainer.appendChild(card);
  });
}

resetBtn.addEventListener("click", createQuiz);

createQuiz();
