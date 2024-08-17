-- CreateTable
CREATE TABLE "data" (
    "Id" TEXT NOT NULL,
    "First Name" TEXT,
    "Last Name" TEXT,
    "Title" TEXT,
    "Company" TEXT,
    "Company Name for Emails" TEXT,
    "Email" TEXT,
    "Email Status" TEXT,
    "Seniority" TEXT,
    "Mobile Phone" TEXT,
    "Corporate Phone" TEXT,
    "Other Phone" TEXT,
    "Stage" TEXT,
    "# Employees" TEXT,
    "Industry" TEXT,
    "Keywords" TEXT,
    "Person Linkedin Url" TEXT,
    "Website" TEXT,
    "Company Linkedin Url" TEXT,
    "Facebook Url" TEXT,
    "Twitter Url" TEXT,
    "City" TEXT,
    "State" TEXT,
    "Country" TEXT,
    "Company Address" TEXT,
    "Company City" TEXT,
    "Company State" TEXT,
    "Company Country" TEXT,
    "Company Phone" TEXT,
    "SEO Description" TEXT,
    "Technologies" TEXT,
    "Annual Revenue" TEXT,
    "Total Funding" TEXT,
    "Latest Funding" TEXT,
    "Latest Funding Amount" TEXT,
    "Last Raised At" TEXT,
    "Email Sent" TEXT,
    "Email Open" TEXT,
    "Email Bounced" TEXT,
    "Replied" TEXT,
    "Demoed" TEXT,
    "Number of Retail Locations" TEXT,
    "Apollo Contact Id" TEXT,
    "Apollo Account Id" TEXT,

    CONSTRAINT "data_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "bio" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "token" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
