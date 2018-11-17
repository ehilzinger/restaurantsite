# restaurantsite

A simple restaurant website, containing functionalities to book tables,
read the menu and to view impressions of the venue.

## Project Members

Enzo Hilzinger, Tim Bayer, Anika Schmidt

## Installation Instructions

HTML files including their JS functions can be viewed with any browser. For the additional functionalities, which are the
blog and the reservation system, a server backend with corresponding database tables is needed (complete XAMPP installation recommended). These databases are already present on the AWS EC2 instance which is linked below, and to keep thins simple we will not provide a detailed installation instruction for the database.
The database schema is as follows:

Database name: "restaurant"

Tables:

* reservations (lastname: varchar(45), firstname: varchar(45), date: datetime, amountofpersons: integer, email: varchar(45), notes: varchar(400))
* blog (title: varchar(45), message: varchar(200), name: varchar(45), date: datetime)

The database users in the PHP files have to be edited to appropriate users, as the users used in our PHP scripts will only work with our database.
Recommendation:

* book.php and blog.php: user with insert permission for the corresponding tables
* loadBlogeintraege.php: user with select permission for "blog"

## Used Technologies

HTML, JS, CSS, PHP

JS frameworks:

* Bootstrap v4.1.3
* JQuery
* Bootstrap Datepicker

## Development Status

Live version can be viewed at: http://ec2-34-201-167-234.compute-1.amazonaws.com

Hosting created and maintained with ♥ by TheEny53 on AWS

## Differences between function specification and implementation

Blog Entries: To avoid storage problems and a downgrade of the Blog-design,
the blog entries were realized without header pictures firstly described
in the function specification.

Menu: As the page scroll animation did not work as expected in testing, we decided to not use any animation for our menu page. In order to comply with our global design policies, we also did **not** make the menu appear as if it was a book, but we decided to go with a clean-looking, stripped down menu page, as we felt that this was way more elegant than a book as background image.

## Disclaimer

This work was created for the educational institution "Corporate State University of Baden-Wuerttemberg Karlsruhe". The creators do not
assume any liability for the code, nor do they give any warranties. The project was created as part of their studies, and should only be
treated as an educational piece of work.
