package practise;

public class VirtualDemo {

	public static void main(String [] agrs){
		Salary s = new Salary ("Eric Dale","Toronto CA",3, 360.00);
		Employee e = new Salary ("John Adams","Ottawa CA",2, 240.00);
			System.out.println("Call mailcheck using salary reference");
			s.mailCheck();
			System.out.println("\n Call mailcheck using salary reference");
			e.mailCheck();
	}
}
